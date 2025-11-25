import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const NOTIFICATIONS = [
	{
		id: 1,
		title: "Booking Confirmed",
		description: "Your booking with John Doe for House Cleaning has been confirmed.",
		time: "2 mins ago",
		icon: "fluent:checkmark-circle-24-filled",
		color: "text-green-600 bg-green-100",
		read: false,
	},
	{
		id: 2,
		title: "New Message",
		description: "Alice Smith sent you a message regarding your Laundry request.",
		time: "1 hour ago",
		icon: "fluent:chat-24-filled",
		color: "text-blue-600 bg-blue-100",
		read: false,
	},
	{
		id: 3,
		title: "Payment Successful",
		description: "Payment of R50.00 for Plumbing Repair was successful.",
		time: "Yesterday",
		icon: "fluent:payment-24-filled",
		color: "text-purple-600 bg-purple-100",
		read: true,
	},
	{
		id: 4,
		title: "Service Completed",
		description: "Please rate your experience with Robert Johnson.",
		time: "2 days ago",
		icon: "fluent:star-24-filled",
		color: "text-yellow-600 bg-yellow-100",
		read: true,
	},
	{
		id: 5,
		title: "System Update",
		description: "We have updated our terms of service. Please review them.",
		time: "1 week ago",
		icon: "fluent:info-24-filled",
		color: "text-gray-600 bg-gray-100",
		read: true,
	},
];

export default function NotificationList() {
	return (
		<div className="flex flex-col gap-4">
			{NOTIFICATIONS.map((notification) => (
				<div
					key={notification.id}
					className={cn(
						"flex gap-4 p-4 rounded-2xl border transition-colors",
						notification.read ? "bg-white border-zinc-100" : "bg-blue-50/50 border-blue-100"
					)}
				>
					<div className={cn("h-12 w-12 rounded-full flex items-center justify-center shrink-0", notification.color)}>
						<Icon icon={notification.icon} className="h-6 w-6" />
					</div>
					<div className="flex-1">
						<div className="flex justify-between items-start mb-1">
							<h3 className={cn("font-semibold text-sm", !notification.read && "text-blue-900")}>
								{notification.title}
							</h3>
							<span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
								{notification.time}
							</span>
						</div>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{notification.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
