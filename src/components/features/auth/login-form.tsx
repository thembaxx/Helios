"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

export default function LoginForm() {
	return (
		<div className="w-full max-w-xl mb-3">
			<form>
				<FieldGroup>
					<FieldSet>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Username or email</FieldLabel>
								<Input
									id="email"
									type="email"
									placeholder="Username or email"
									className="placeholder:text-sm"
									required
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
									>
										<Spinner />
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
