import { Icon } from "@iconify/react";
import SignUpForm from "@/components/features/auth/sign-up-form";
import SocialLogin from "@/components/features/auth/social-login";
import { Separator } from "@/components/ui/separator";
import appConfig from "@/config/app,config";

export default function SignUpPage() {
	return (
		<div className="flex flex-col gap-6 px-6 py-12 w-full overflow-hidden">
			<header className="flex flex-col items-center gap-3">
				<div className="flex items-center gap-2">
					<Icon icon="healthicons:blood-drop-24px" height={20} width={20} />
					<p className="font-bold">{appConfig.name}</p>
				</div>
				<h1 className="text-xl font-medium text-center">
					Sign up to find work you love
				</h1>
			</header>
			<SocialLogin />
			<div className="grid grid-cols-[1fr_auto_1fr] items-center w-full overflow-hidden">
				<Separator />
				<div className="px-3">
					<p className="text-sm font-medium">or</p>
				</div>
				<Separator />
			</div>
			<SignUpForm />
		</div>
	);
}
