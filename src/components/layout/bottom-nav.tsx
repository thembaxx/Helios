"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
	{ name: "Home", icon: "fluent:home-24-filled", path: "/dashboard" },
	{
		name: "Bookings",
		icon: "fluent:calendar-ltr-24-filled",
		path: "/bookings",
	},
	{ name: "Messages", icon: "fluent:chat-24-filled", path: "/messages" },
	{ name: "Profile", icon: "fluent:person-24-filled", path: "/profile" },
];

export default function BottomNav() {
	const pathname = usePathname();

	return (
		<div className="absolute bottom-0 left-0 right-0 bg-white border-t px-6 py-4 pb-8">
			<div className="flex items-center justify-between">
				{NAV_ITEMS.map((item) => {
					const isActive = pathname === item.path;
					return (
						<Link
							key={item.name}
							href={item.path}
							className={cn(
								"flex flex-col items-center gap-1 transition-colors",
								isActive
									? "text-black"
									: "text-muted-foreground hover:text-black/70",
							)}
						>
							<Icon icon={item.icon} className="h-6 w-6" />
							<span className="text-[10px] font-medium">{item.name}</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
