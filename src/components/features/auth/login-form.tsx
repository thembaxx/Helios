"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSignIn = async () => {
		setLoading(true);
		await authClient.signIn.email(
			{
				email,
				password,
				callbackURL: "/dashboard", // or wherever you want to redirect
			},
			{
				onRequest: () => {
					setLoading(true);
				},
				onSuccess: () => {
					setLoading(false);
					router.push("/dashboard");
				},
				onError: (ctx) => {
					setLoading(false);
					alert(ctx.error.message);
				},
			},
		);
	};

	return (
		<div className="w-full max-w-xl mb-3">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSignIn();
				}}
			>
				<FieldGroup>
					<FieldSet>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									id="email"
									type="email"
									placeholder="Email address"
									className="placeholder:text-sm"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="password">Password</FieldLabel>
								<Input
									id="password"
									type="password"
									placeholder="Password"
									className="placeholder:text-sm"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Field>
						</FieldGroup>
					</FieldSet>
					<FieldSet>
						<FieldGroup>
							<Field>
								<motion.div whileTap={{ scale: 0.95 }}>
									<Button
										variant="default"
										size="sm"
										className="w-full bg-[#008D00] hover:brightness-95 active:brightness-100 h-9"
										type="submit"
										disabled={loading}
									>
										{loading && <Spinner />}
										Continue
									</Button>
								</motion.div>
							</Field>
						</FieldGroup>
					</FieldSet>
				</FieldGroup>
			</form>
		</div>
	);
}
