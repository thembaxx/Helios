"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";

export default function SignUpForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSignUp = async () => {
		setLoading(true);
		await authClient.signUp.email(
			{
				email,
				password,
				name: `${firstName} ${lastName}`,
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
		<div className="w-full max-w-xl mt-3">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSignUp();
				}}
			>
				<FieldGroup>
					<FieldSet>
						<FieldGroup>
							<div className="grid grid-cols-2 gap-3">
								<Field>
									<FieldLabel htmlFor="first-name">First name</FieldLabel>
									<Input
										id="first-name"
										type="text"
										required
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</Field>
								<Field>
									<FieldLabel htmlFor="last-name">Last name</FieldLabel>
									<Input
										id="last-name"
										type="text"
										required
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Field>
							</div>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									id="email"
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="password">Password</FieldLabel>
								<Input
									id="password"
									className="placeholder:text-sm"
									placeholder="Password (8 or more characters)"
									type="password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Field>
						</FieldGroup>
					</FieldSet>
					<FieldSet>
						<FieldGroup>
							<Field orientation="horizontal">
								<FieldLabel
									htmlFor="term-and-conditions"
									className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
								>
									<Checkbox
										id="term-and-conditions"
										defaultChecked
										className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
									/>
									<div className="grid gap-1.5 font-normal">
										<p className="text-sm leading-none font-medium">
											Accept terms and conditions
										</p>
										<p className="text-muted-foreground text-sm">
											By clicking this checkbox, you agree to the terms and
											conditions.
										</p>
									</div>
								</FieldLabel>
							</Field>
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
										Create my account
									</Button>
								</motion.div>
								<p className="text-shadow-white text-center text-[15px]">
									Already have an account?{" "}
									<Link href="/login" className="font-medium underline">
										Log in
									</Link>
								</p>
							</Field>
						</FieldGroup>
					</FieldSet>
				</FieldGroup>
			</form>
		</div>
	);
}
