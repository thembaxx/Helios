import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<header className="flex items-center justify-between py-4">
			<div>
				<p className="text-muted-foreground text-sm">Good morning,</p>
				<h1 className="text-lg font-bold">Themba</h1>
			</div>
			<Button
				variant="outline"
				size="icon"
				className="rounded-full h-10 w-10 border-zinc-200"
			>
				<Bell className="h-5 w-5" />
			</Button>
		</header>
	);
}
