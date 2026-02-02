import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
	return (
		<div className="space-y-6">
			<h1 className="font-bold text-pretty text-3xl">
				What do you need help with today?
			</h1>
			<div className="relative flex items-center">
				<Input
					placeholder="Search electrician, gardener etc..."
					className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-2xl pl-12 rounded-2xl border border-[#EBEDED] dark:border-zinc-700 h-12 shadow-none placeholder:text-sm"
				/>
				<Button
					className="rounded-full absolute left-2"
					size="icon"
					variant="ghost"
				>
					<Icon icon="fluent:search-24-filled" className="h-5 w-5" />
				</Button>
			</div>
		</div>
	);
}
