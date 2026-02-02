import ProfileForm from "@/components/features/profile/profile-form";
import ProfileHeader from "@/components/features/profile/profile-header";
import BottomNav from "@/components/layout/bottom-nav";

export default function ProfilePage() {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-black pb-24 text-black dark:text-white">
			<div className="max-w-md mx-auto bg-white dark:bg-zinc-900 min-h-screen shadow-sm flex flex-col relative">
				<div className="flex-1">
					<ProfileHeader />
					<div className="mt-4">
						<ProfileForm />
					</div>
				</div>
				<BottomNav />
			</div>
		</div>
	);
}
