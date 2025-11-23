"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SocialLoginProps = {
	className?: string;
};

export default function SocialLogin({ className }: SocialLoginProps) {
	return (
		<div className={cn("flex flex-col gap-3", className)}>
			<motion.div whileTap={{ scale: 0.95 }}>
				<Button
					variant="outline"
					size="sm"
					className="w-full rounded-full h-9 gap-3 border-[#8d8c8c]"
				>
					<Icon icon="fa-brands:apple" height={18} width={18} />
					Continue with Apple
				</Button>
			</motion.div>
			<motion.div whileTap={{ scale: 0.95 }}>
				<Button
					variant="outline"
					size="sm"
					className="w-full rounded-full h-9 gap-3 border-[#8d8c8c]"
				>
					<Image
						src="/icons/google.svg"
						height={14}
						width={14}
						alt="Google Logo"
					/>
					Continue with Google
				</Button>
			</motion.div>
		</div>
	);
}
