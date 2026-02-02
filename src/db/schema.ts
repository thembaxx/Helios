import { boolean, pgTable, text, timestamp, integer, doublePrecision } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("emailVerified").notNull(),
	image: text("image"),
	createdAt: timestamp("createdAt").notNull(),
	updatedAt: timestamp("updatedAt").notNull(),
});

export const session = pgTable("session", {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expiresAt").notNull(),
	token: text("token").notNull().unique(),
	createdAt: timestamp("createdAt").notNull(),
	updatedAt: timestamp("updatedAt").notNull(),
	ipAddress: text("ipAddress"),
	userAgent: text("userAgent"),
	userId: text("userId")
		.notNull()
		.references(() => user.id),
});

export const account = pgTable("account", {
	id: text("id").primaryKey(),
	accountId: text("accountId").notNull(),
	providerId: text("providerId").notNull(),
	userId: text("userId")
		.notNull()
		.references(() => user.id),
	accessToken: text("accessToken"),
	refreshToken: text("refreshToken"),
	idToken: text("idToken"),
	accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
	refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
	scope: text("scope"),
	password: text("password"),
	createdAt: timestamp("createdAt").notNull(),
	updatedAt: timestamp("updatedAt").notNull(),
});

export const verification = pgTable("verification", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: timestamp("expiresAt").notNull(),
	createdAt: timestamp("createdAt"),
	updatedAt: timestamp("updatedAt"),
});

export const service = pgTable("service", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	description: text("description"),
	price: integer("price").notNull(),
	providerId: text("providerId")
		.notNull()
		.references(() => user.id),
	image: text("image"),
	category: text("category").notNull(),
	rating: doublePrecision("rating").default(0),
	createdAt: timestamp("createdAt").notNull(),
	updatedAt: timestamp("updatedAt").notNull(),
});

export const booking = pgTable("booking", {
	id: text("id").primaryKey(),
	userId: text("userId")
		.notNull()
		.references(() => user.id),
	serviceId: text("serviceId")
		.notNull()
		.references(() => service.id),
	status: text("status").notNull(), // 'upcoming', 'completed', 'cancelled'
	date: text("date").notNull(),
	time: text("time").notNull(),
	location: text("location").notNull(),
	price: integer("price").notNull(),
	createdAt: timestamp("createdAt").notNull(),
	updatedAt: timestamp("updatedAt").notNull(),
});

export const notification = pgTable("notification", {
	id: text("id").primaryKey(),
	userId: text("userId")
		.notNull()
		.references(() => user.id),
	title: text("title").notNull(),
	message: text("message").notNull(),
	read: boolean("read").default(false).notNull(),
	createdAt: timestamp("createdAt").notNull(),
});

export const message = pgTable("message", {
	id: text("id").primaryKey(),
	senderId: text("senderId")
		.notNull()
		.references(() => user.id),
	receiverId: text("receiverId")
		.notNull()
		.references(() => user.id),
	content: text("content").notNull(),
	createdAt: timestamp("createdAt").notNull(),
});
