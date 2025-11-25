"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingCard from "./booking-card";

const MOCK_BOOKINGS = [
	{
		id: "1",
		serviceName: "House Cleaning",
		providerName: "John Doe",
		date: "Nov 28, 2025",
		time: "10:00 AM",
		location: "123 Main St, Sandton",
		status: "upcoming" as const,
		price: "R450.00",
		image:
			"https://images.unsplash.com/photo-1758273238370-3bc08e399620?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: "2",
		serviceName: "Plumbing Repair",
		providerName: "Mike Smith",
		date: "Nov 20, 2025",
		time: "02:00 PM",
		location: "123 Main St, Sandton",
		status: "completed" as const,
		price: "R850.00",
		image:
			"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
	},
	{
		id: "3",
		serviceName: "Gardening Service",
		providerName: "Green Thumb Co.",
		date: "Nov 15, 2025",
		time: "09:00 AM",
		location: "123 Main St, Sandton",
		status: "cancelled" as const,
		price: "R300.00",
		image:
			"https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=400&fit=crop",
	},
];

export default function BookingList() {
	const upcomingBookings = MOCK_BOOKINGS.filter((b) => b.status === "upcoming");
	const pastBookings = MOCK_BOOKINGS.filter((b) => b.status !== "upcoming");

	return (
		<Tabs defaultValue="upcoming" className="w-full">
			<TabsList className="grid w-full grid-cols-2 mb-6">
				<TabsTrigger value="upcoming">Upcoming</TabsTrigger>
				<TabsTrigger value="past">Past</TabsTrigger>
			</TabsList>
			<TabsContent value="upcoming" className="space-y-4">
				{upcomingBookings.length > 0 ? (
					upcomingBookings.map((booking) => (
						<BookingCard key={booking.id} booking={booking} />
					))
				) : (
					<div className="text-center py-12 text-muted-foreground">
						No upcoming bookings found.
					</div>
				)}
			</TabsContent>
			<TabsContent value="past" className="space-y-4">
				{pastBookings.length > 0 ? (
					pastBookings.map((booking) => (
						<BookingCard key={booking.id} booking={booking} />
					))
				) : (
					<div className="text-center py-12 text-muted-foreground">
						No past bookings found.
					</div>
				)}
			</TabsContent>
		</Tabs>
	);
}
