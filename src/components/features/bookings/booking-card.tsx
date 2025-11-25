import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

interface BookingCardProps {
	booking: {
		id: string;
		serviceName: string;
		providerName: string;
		date: string;
		time: string;
		location: string;
		status: "upcoming" | "completed" | "cancelled";
		price: string;
		image: string;
	};
}

export default function BookingCard({ booking }: BookingCardProps) {
	const statusColors = {
		upcoming: "bg-blue-100 text-blue-700 hover:bg-blue-100/80",
		completed: "bg-green-100 text-green-700 hover:bg-green-100/80",
		cancelled: "bg-red-100 text-red-700 hover:bg-red-100/80",
	};

	return (
		<Card className="overflow-hidden border-none shadow-sm bg-white dark:bg-zinc-900">
			<div className="flex flex-row">
				<div className="w-24 h-auto relative">
					{/** biome-ignore lint/performance/noImgElement: Fix later */}
					<img
						src={booking.image}
						alt={booking.serviceName}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
				<div className="flex-1 p-4">
					<div className="flex justify-between items-start mb-2">
						<div>
							<h3 className="font-semibold text-base line-clamp-1">
								{booking.serviceName}
							</h3>
							<p className="text-sm text-muted-foreground">
								{booking.providerName}
							</p>
						</div>
						<Badge variant="secondary" className={statusColors[booking.status]}>
							{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
						</Badge>
					</div>

					<div className="space-y-1 text-sm text-muted-foreground mt-3">
						<div className="flex items-center gap-2">
							<Calendar className="h-3.5 w-3.5" />
							<span>{booking.date}</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="h-3.5 w-3.5" />
							<span>{booking.time}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-3.5 w-3.5" />
							<span className="line-clamp-1">{booking.location}</span>
						</div>
					</div>
				</div>
			</div>
			<CardFooter className="bg-zinc-50 dark:bg-zinc-800/50 px-4 py-3 flex justify-between items-center">
				<span className="font-semibold">{booking.price}</span>
				<div className="flex gap-2">
					{booking.status === "upcoming" && (
						<Button variant="outline" size="sm" className="h-8 text-xs">
							Cancel
						</Button>
					)}
					<Button
						size="sm"
						className="h-8 text-xs bg-black text-white hover:bg-zinc-800"
					>
						View Details
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
