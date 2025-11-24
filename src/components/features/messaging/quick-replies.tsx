import { Button } from "@/components/ui/button";

interface QuickRepliesProps {
	options: string[];
	onSelect: (option: string) => void;
}

export function QuickReplies({ options, onSelect }: QuickRepliesProps) {
	return (
		<div className="mt-4 mb-6 border rounded-3xl p-4 bg-white shadow-sm">
			<p className="text-sm font-medium mb-3 text-black">
				Choose a quick reply below:
			</p>
			<div className="flex flex-col gap-2">
				{options.map((option) => (
					<Button
						key={option}
						variant="secondary"
						className="w-full justify-center rounded-full bg-[#E8E8E8] hover:bg-[#DEDEDE] text-black font-medium h-10"
						onClick={() => onSelect(option)}
					>
						{option}
					</Button>
				))}
			</div>
		</div>
	);
}
