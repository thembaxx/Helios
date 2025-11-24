import ChatInterface from "@/components/features/messaging/chat-interface";

export default function MessagesPage() {
	return (
		<div className="h-screen w-full bg-zinc-100 flex items-center justify-center">
			<div className="w-full max-w-md h-full overflow-hidden relative">
				<div className="h-full w-full">
					<ChatInterface />
				</div>
			</div>
		</div>
	);
}
