import CategoryGrid from "@/components/features/dashboard/category-grid";
import FeaturedServices from "@/components/features/dashboard/featured-services";
import Header from "@/components/features/dashboard/header";
import SearchBar from "@/components/features/dashboard/search-bar";
import FeaturedWork from "@/components/features/dashboard/top-rated";
import BottomNav from "@/components/layout/bottom-nav";

export default function Dashboard() {
	return (
		<div className="h-screen w-full bg-zinc-100 flex items-center justify-center">
			<div className="w-full max-w-md h-full bg-white sm:rounded-[40px] sm:h-[850px] sm:border-8 sm:border-zinc-900 overflow-hidden relative shadow-2xl">
				{/* Notch simulation for desktop view */}
				<div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-900 rounded-b-3xl z-20" />

				<div className="h-full flex flex-col">
					<div className="flex-1 overflow-y-auto scrollbar-hide">
						<div className="px-6 pt-8 pb-24 flex flex-col gap-6">
							<Header />
							<SearchBar />
							<CategoryGrid />
							<FeaturedServices />
							<FeaturedWork />
						</div>
					</div>
					<BottomNav />
				</div>
			</div>
		</div>
	);
}
