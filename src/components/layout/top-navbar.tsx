import { Icon } from "@iconify/react";
import appConfig from "@/config/app,config";
import Link from "next/link";

export default function TopNavbar() {
	return (
		<nav className="fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-md border-b z-50 flex items-center px-4 justify-between">
			<Link href="/dashboard" className="flex items-center gap-2">
				<div className="bg-black text-white p-1 rounded-lg">
					<Icon icon="healthicons:blood-drop-24px" className="h-5 w-5" />
				</div>
				<span className="font-bold text-lg tracking-tight">{appConfig.name}</span>
			</Link>
		</nav>
	);
}
