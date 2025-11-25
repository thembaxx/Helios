import { Icon } from "@iconify/react";

const CATEGORIES = [
	{
		name: "Cleaning",
		icon: "fluent:broom-24-filled",
		color: "bg-blue-100 text-blue-600",
	},
	{
		name: "Repair",
		icon: "fluent:wrench-24-filled",
		color: "bg-orange-100 text-orange-600",
	},
	{
		name: "Painting",
		icon: "fluent:paint-brush-24-filled",
		color: "bg-purple-100 text-purple-600",
	},
	{
		name: "Laundry",
		icon: "fluent:washer-24-filled",
		color: "bg-green-100 text-green-600",
	},
	{
		name: "Appliance",
		icon: "fluent:plug-connected-24-filled",
		color: "bg-red-100 text-red-600",
	},
	{
		name: "Plumbing",
		icon: "fluent:drop-24-filled",
		color: "bg-cyan-100 text-cyan-600",
	},
	{
		name: "Shifting",
		icon: "fluent:vehicle-truck-profile-24-filled",
		color: "bg-yellow-100 text-yellow-600",
	},
	{
		name: "More",
		icon: "fluent:grid-dots-24-filled",
		color: "bg-gray-100 text-gray-600",
	},
];

export default function CategoryGrid() {
	return (
		<div className="py-4">
			<div className="flex items-center justify-between mb-4">
				<h2 className="font-bold text-lg">Categories</h2>
				<button
					type="button"
					className="text-sm text-muted-foreground hover:text-primary"
				>
					See all
				</button>
			</div>
			<div className="grid grid-cols-4 gap-4">
				{CATEGORIES.map((cat) => (
					<div key={cat.name} className="flex flex-col items-center gap-2">
						<div
							className={`h-14 w-14 rounded-2xl flex items-center justify-center ${cat.color}`}
						>
							<Icon icon={cat.icon} className="h-6 w-6" />
						</div>
						<span className="text-xs font-medium text-center">{cat.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
