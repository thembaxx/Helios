import ChatInterface from "@/components/features/messaging/chat-interface";
import BottomNav from "@/components/layout/bottom-nav";

export default function MessagesPage() {
	return (
		<div className="h-screen w-full bg-zinc-100 flex items-center justify-center text-black dark:text-white">
			<div className="w-full max-w-md h-full bg-white dark:bg-zinc-900 sm:rounded-[40px] sm:h-[850px] sm:border-8 sm:border-zinc-900 overflow-hidden relative shadow-2xl">
				{/* Notch simulation for desktop view */}
				<div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-900 rounded-b-3xl z-20" />

				<div className="h-full flex flex-col pb-24">
					<ChatInterface />
				</div>
				<BottomNav />
			</div>
		</div>
	);
}
