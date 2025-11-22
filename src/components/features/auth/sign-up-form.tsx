"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

export default function SignUpForm() {
	return (
		<div className="w-full max-w-xl mt-3">
			<form>
				<FieldGroup>
					<FieldSet>
						<FieldGroup>
							<div className="grid grid-cols-2 gap-3">
								<Field>
									<FieldLabel htmlFor="firs-name">First name</FieldLabel>
									<Input id="firs-name" type="first name" required />
								</Field>
								<Field>
									<FieldLabel htmlFor="last-name">Last name</FieldLabel>
									<Input id="last-name" type="last name" required />
								</Field>
							</div>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input id="email" type="email" required />
							</Field>
							<Field>
								<FieldLabel htmlFor="password">Password</FieldLabel>
								<Input
									id="password"
									className="placeholder:text-sm"
									placeholder="Password (8 or more characters)"
									type="password"
									required
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
									>
										<Spinner />
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
