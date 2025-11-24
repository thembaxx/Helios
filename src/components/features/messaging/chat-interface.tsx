"use client";

import { Camera, Image as ImageIcon, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageBubble } from "./message-bubble";
import { QuickReplies } from "./quick-replies";

interface Message {
	id: string;
	content: string;
	isSent: boolean;
	timestamp?: string;
	status?: string;
}

const INITIAL_MESSAGES: Message[] = [
	{
		id: "1",
		content:
			"You can select one of the issues below, or if it's something else, type it in. If I can't help you, I'll connect you with one of my human colleagues",
		isSent: false,
		timestamp: "Received at 2:44 p.m.",
	},
	{
		id: "2",
		content: "Update account or vehicle information",
		isSent: true,
		status: "Delivered now",
	},
	{
		id: "3",
		content:
			"To help me take you to the right place, what would you like to update?",
		isSent: false,
		timestamp: "Received now",
	},
];

const QUICK_REPLIES = [
	"Contact details",
	"Dash type or vehicle",
	"Starting point",
];

export default function ChatInterface() {
	const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
	const [inputValue, setInputValue] = useState("");

	const handleSendMessage = (content: string) => {
		if (!content.trim()) return;

		const newMessage: Message = {
			id: Date.now().toString(),
			content,
			isSent: true,
			status: "Delivered now",
		};

		setMessages((prev) => [...prev, newMessage]);
		setInputValue("");
	};

	return (
		<div className="flex flex-col h-full bg-white max-w-md mx-auto shadow-2xl overflow-hidden relative">
			{/* Header */}
			<header className="flex items-center justify-between px-4 py-3 border-b bg-white z-10">
				<div className="flex items-center">
					<h1 className="font-bold text-lg">Support</h1>
				</div>
				<Button
					variant="ghost"
					className="text-sm font-medium hover:bg-transparent px-0"
				>
					End Chat
				</Button>
			</header>

			{/* Chat Area */}
			<div className="flex-1 overflow-y-auto p-4 flex flex-col bg-white scrollbar-hide">
				{messages.map((msg) => (
					<MessageBubble
						key={msg.id}
						content={msg.content}
						isSent={msg.isSent}
						timestamp={msg.timestamp}
						status={msg.status}
					/>
				))}

				{/* Quick Replies - Only show if last message is received */}
				{!messages[messages.length - 1].isSent && (
					<QuickReplies
						options={QUICK_REPLIES}
						onSelect={(option) => handleSendMessage(option)}
					/>
				)}
			</div>

			{/* Input Area */}
			<div className="p-3 border-t bg-white">
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-3 text-black">
						<Camera className="h-6 w-6 cursor-pointer" />
						<ImageIcon className="h-6 w-6 cursor-pointer" />
					</div>
					<div className="flex-1 relative">
						<div className="relative flex items-center">
							<Input
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								placeholder="Type a message"
								className="pr-10 bg-[#F1F1F1] border-none rounded-full h-10 placeholder:text-muted-foreground/70"
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										handleSendMessage(inputValue);
									}
								}}
							/>
							<Button
								size="icon"
								variant="ghost"
								className="absolute right-1 h-8 w-8 hover:bg-transparent text-muted-foreground"
								onClick={() => handleSendMessage(inputValue)}
							>
								<Send className="h-5 w-5 -rotate-45 mb-1" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
