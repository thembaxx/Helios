import NotificationList from "@/components/features/notifications/notification-list";
import BottomNav from "@/components/layout/bottom-nav";

export default function NotificationsPage() {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-black pb-24">
			<div className="max-w-md mx-auto bg-white dark:bg-zinc-900 min-h-screen shadow-sm">
				{/* Header */}
				<div className="px-6 py-4 border-b flex items-center gap-4 pt-6">
					<h1 className="font-bold text-xl">Notifications</h1>
				</div>

				{/* Content */}
				<div className="p-6">
					<NotificationList />
				</div>

				{/* Bottom Navigation */}
				<BottomNav />
			</div>
		</div>
	);
}
