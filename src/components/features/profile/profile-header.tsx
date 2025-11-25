"use client";

import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function ProfileHeader() {
	const { data: session } = authClient.useSession();
	const user = session?.user;

	return (
		<div className="flex flex-col items-center justify-center py-8">
			<div className="relative">
				<Avatar className="h-24 w-24 border-4 border-white shadow-lg">
					<AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
					<AvatarFallback className="text-2xl bg-zinc-100">
						{user?.name?.charAt(0).toUpperCase() || "U"}
					</AvatarFallback>
				</Avatar>
				<Button
					size="icon"
					variant="secondary"
					className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-md border-2 border-white"
				>
					<Camera className="h-4 w-4" />
				</Button>
			</div>
			<div className="mt-4 text-center">
				<h2 className="text-xl font-bold">{user?.name || "Guest User"}</h2>
				<p className="text-sm text-muted-foreground">
					{user?.email || "guest@example.com"}
				</p>
			</div>
		</div>
	);
}
