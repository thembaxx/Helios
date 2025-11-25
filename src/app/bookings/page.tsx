import BookingList from "@/components/features/bookings/booking-list";
import BottomNav from "@/components/layout/bottom-nav";

export default function BookingsPage() {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-black pb-24">
			<div className="max-w-md mx-auto bg-white dark:bg-zinc-900 min-h-screen shadow-sm flex flex-col">
				<div className="px-6 py-6 border-b">
					<h1 className="font-bold text-2xl">My Bookings</h1>
					<p className="text-muted-foreground text-sm mt-1">
						Manage your upcoming and past appointments
					</p>
				</div>

				<div className="flex-1 p-6">
					<BookingList />
				</div>

				<BottomNav />
			</div>
		</div>
	);
}
