import { cn } from "@/lib/utils";

interface MessageBubbleProps {
	content: string;
	timestamp?: string;
	isSent: boolean;
	status?: string;
}

export function MessageBubble({
	content,
	timestamp,
	isSent,
	status,
}: MessageBubbleProps) {
	return (
		<div
			className={cn(
				"flex flex-col max-w-[85%] mb-4",
				isSent ? "self-end items-end" : "self-start items-start",
			)}
		>
			<div
				className={cn(
					"px-4 py-3 rounded-2xl text-[15px] leading-relaxed",
					isSent
						? "bg-black text-white rounded-br-none"
						: "bg-[#F1F1F1] text-black rounded-bl-none",
				)}
			>
				{content}
			</div>
			<div className="mt-1 px-1">
				{timestamp && (
					<span className="text-xs text-muted-foreground">{timestamp}</span>
				)}
				{status && (
					<span className="text-xs text-muted-foreground">{status}</span>
				)}
			</div>
		</div>
	);
}
