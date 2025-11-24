import SearchBar from "@/components/features/dashboard/search-bar";
import { Button } from "@/components/ui/button";

function Dashboard() {
	return (
		<div className="h-screen w-full bg-zinc-100 flex items-center justify-center p-6">
			<div className="w-full max-w-md h-full overflow-hidden relative">
				<div className="p-3 bg-zinc-200 rounded-3xl flex flex-col gap-3">
					<SearchBar />
					<Button className="h-12 rounded-2xl" variant="default">
						Search
					</Button>
					<div className="mt-6 flex flex-wrap gap-3 text-sm">
						{["Plumber", "Electrician", "Gardener", "Carpenter", "Painter"].map(
							(item) => (
								<p
									key={item}
									className="rounded-2xl bg-black/5 px-4 py-3 text-black/80"
								>
									{item}
								</p>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
