import { Star } from "lucide-react";
import Image from "next/image";

const FEATURED = [
	{
		id: 1,
		name: "John Doe",
		service: "House Cleaning",
		rating: 4.8,
		price: "$25/hr",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
	},
	{
		id: 2,
		name: "Alice Smith",
		service: "Washing Clothes",
		rating: 4.9,
		price: "$20/hr",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
	},
	{
		id: 3,
		name: "Robert Johnson",
		service: "Plumbing Repair",
		rating: 4.7,
		price: "$35/hr",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
	},
];

export default function FeaturedServices() {
	return (
		<div className="py-4">
			<div className="flex items-center justify-between mb-4">
				<h2 className="font-bold text-lg">Featured</h2>
				<button
					type="button"
					className="text-sm text-muted-foreground hover:text-primary"
				>
					See all
				</button>
			</div>
			<div className="flex flex-col gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
				{FEATURED.map((item) => (
					<div
						key={item.id}
						className="min-w-[240px] p-3 rounded-3xl bg-white border border-zinc-100"
					>
						<div className="flex items-start gap-3">
							<div className="relative h-12 w-12 rounded-full overflow-hidden bg-zinc-100 shrink-0">
								<Image
									src={item.image}
									alt={item.name}
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<h3 className="font-bold text-sm truncate">{item.name}</h3>
								<p className="text-xs text-muted-foreground truncate">
									{item.service}
								</p>
								<div className="flex items-center gap-1 mt-1">
									<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
									<span className="text-xs font-medium">{item.rating}</span>
								</div>
							</div>
							<div className="bg-black/5 px-2 py-1 rounded-lg">
								<span className="text-xs font-bold">{item.price}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
