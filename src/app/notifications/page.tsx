import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NotificationList from "@/components/features/notifications/notification-list";

export default function NotificationsPage() {
	return (
		<div className="h-screen w-full bg-zinc-100 flex items-center justify-center">
			<div className="w-full max-w-md h-full bg-white sm:rounded-[40px] sm:h-[850px] sm:border-8 sm:border-zinc-900 overflow-hidden relative shadow-2xl flex flex-col">
				{/* Notch simulation for desktop view */}
				<div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-900 rounded-b-3xl z-20" />

				{/* Header */}
				<div className="px-6 py-4 border-b flex items-center gap-4 pt-8 sm:pt-12">
					<Link href="/dashboard">
						<Button variant="ghost" size="icon" className="-ml-2">
							<ArrowLeft className="h-6 w-6" />
						</Button>
					</Link>
					<h1 className="font-bold text-xl">Notifications</h1>
				</div>

				{/* Content */}
				<div className="flex-1 overflow-y-auto scrollbar-hide p-6">
					<NotificationList />
				</div>
			</div>
		</div>
	);
}
