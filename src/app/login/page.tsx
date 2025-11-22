import { Icon } from "@iconify/react";
import Link from "next/link";
import LoginForm from "@/components/features/auth/login-form";
import SocialLogin from "@/components/features/auth/social-login";
import { Separator } from "@/components/ui/separator";
import appConfig from "@/config/app,config";

export default function LoginPage() {
	return (
		<div className="flex flex-col gap-6 px-6 py-12 w-full h-screen overflow-hidden">
			<header className="mb-6 flex justify-center">
				<div className="flex items-center gap-2">
					<Icon icon="healthicons:blood-drop-24px" height={20} width={20} />
					<p className="font-bold">{appConfig.name}</p>
				</div>
			</header>
			<LoginForm />
			<div className="grid grid-cols-[1fr_auto_1fr] items-center w-full overflow-hidden">
				<Separator />
				<div className="px-3">
					<p className="text-sm font-medium">or</p>
				</div>
				<Separator />
			</div>
			<div className="grow flex flex-col justify-between">
				<SocialLogin />
				<div>
					<p className="text-shadow-white text-center text-[15px]">
						Don't have an account?{" "}
						<Link href="/sign-up" className="font-medium underline">
							Sign Up
						</Link>
					</p>
					<div className="mt-3">
						<div className="text-xs inline-block text-center text-pretty text-muted-foreground leading-5 tracking-wide">
							By continuing, you agree to {appConfig.name}&apos;s{" "}
							<Link className="underline" href="/">
								Consumer Terms
							</Link>
							and{" "}
							<Link className="underline" href="/">
								Usage Policy
							</Link>
							, and acknowledge their{" "}
							<Link className="underline" href="/">
								Privacy Policy
							</Link>
							.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
