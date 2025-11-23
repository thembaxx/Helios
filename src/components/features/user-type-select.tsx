"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserTypeSwitcher } from "@/components/user-type-switcher";
import appConfig from "@/config/app,config";

function UserTypeSelect() {
	const router = useRouter();

	return (
		<div className="h-full w-full grow flex flex-col justify-between items-center bg-neutral-950 px-8 pt-4 pb-12">
			<div>
				<Image
					fill
					src="/images/hero3.png"
					alt="Background"
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div
					className="absolute inset-0 z-10 bg-linear-to-b from-black/20 to-black"
					aria-hidden="true" // Hide decorative overlay from screen readers
				/>
			</div>

			<div className="text-white/90 text-shadow-white items-start flex flex-col justify-between grow pb-6 w-full relative z-10">
				<div className="flex items-center gap-2">
					<Icon icon="healthicons:blood-drop-24px" height={20} width={20} />
					<p className="font-bold">{appConfig.name}</p>
				</div>
				<div className="py-16">
					<h1 className="text-[40px] leading-12 tracking-tighter">
						Hire, work, <br />
						or both—
						<br />
						all in one place.
					</h1>
					<p className="text-sm mt-3 text-shadow-black text-pretty">
						Realible & proffessional services
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-6 w-full relative z-10">
				<UserTypeSwitcher
				// defaultValue={userType}
				// onValueChange={(val) => setUserType(val as "client" | "freelancer")}
				/>
				<div className="space-y-4">
					<motion.div whileTap={{ scale: 0.95 }}>
						<Button
							variant="default"
							size="sm"
							className="w-full bg-[#008D00] hover:brightness-95 active:brightness-100 h-9"
							onClick={() => router.push("/sign-up")}
						>
							Create account
						</Button>
					</motion.div>
					<p className="text-white text-shadow-white text-center text-[15px]">
						Already have an account?{" "}
						<Link href="/login" className="font-medium underline">
							Log in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default UserTypeSelect;
