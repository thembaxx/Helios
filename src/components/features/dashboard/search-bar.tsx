import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
	return (
		<div className="relative flex items-center">
			<Input
				placeholder="Search electrician, gardener etc..."
				className="bg-white/60 backdrop-blur-2xl rounded-full border border-[#EBEDED] h-12 shadow-none placeholder:text-sm pl-4"
			/>
			<Button
				className="rounded-full absolute right-2"
				size="icon"
				variant="ghost"
			>
				<Icon icon="fluent:search-24-filled" className="h-5 w-5" />
			</Button>
		</div>
	);
}
