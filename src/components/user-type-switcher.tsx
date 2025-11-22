"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { motion, type Transition } from "motion/react";
import * as React from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Animation Configuration (Option A: Balanced Spring)
// ---------------------------------------------------------------------------
const TOGGLE_TRANSITION = {
	type: "spring",
	stiffness: 400,
	damping: 30,
} as Transition;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface UserTypeSwitcherProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
	defaultValue?: "client" | "freelancer";
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
const UserTypeSwitcher = React.forwardRef<
	React.ComponentRef<typeof RadioGroupPrimitive.Root>,
	UserTypeSwitcherProps
>(({ className, ...props }, ref) => {
	// We need internal state to drive the animation if the component is uncontrolled,
	// or we use the controlled value passed in props.
	const [value, setValue] = React.useState<string>(
		props.value || props.defaultValue || "client",
	);

	// Handle change for both controlled and uncontrolled patterns
	const handleValueChange = (newValue: string) => {
		setValue(newValue);
		props.onValueChange?.(newValue);
	};

	return (
		<RadioGroupPrimitive.Root
			ref={ref}
			className={cn(
				"relative flex w-full max-w-[400px] cursor-default gap-0 rounded-full border border-white/10 bg-neutral-900/50 p-1 shadow-inner backdrop-blur-md",
				className,
			)}
			onValueChange={handleValueChange}
			value={value}
			{...props}
		>
			<SwitcherItem value="client" label="I'm a client" currentValue={value} />
			<SwitcherItem
				value="freelancer"
				label="I'm a Job seeker"
				currentValue={value}
			/>
		</RadioGroupPrimitive.Root>
	);
});

UserTypeSwitcher.displayName = "UserTypeSwitcher";

// ---------------------------------------------------------------------------
// Sub-Component: Individual Radio Item
// ---------------------------------------------------------------------------
interface SwitcherItemProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
	value: string;
	label: string;
	currentValue: string;
}

const SwitcherItem = ({
	value,
	label,
	currentValue,
	className,
	...props
}: SwitcherItemProps) => {
	const isSelected = currentValue === value;

	return (
		<RadioGroupPrimitive.Item
			value={value}
			className={cn(
				// Base styles
				"group relative z-10 flex h-9 flex-1 items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
				// Text colors based on selection
				isSelected ? "text-black" : "text-white/60 hover:text-white",
				className,
			)}
			{...props}
		>
			{/* The Floating Pill 
        We use layoutId to allow Motion to animate the shared element 
        between the two different render locations.
      */}
			{isSelected && (
				<motion.div
					layoutId="active-pill"
					transition={TOGGLE_TRANSITION}
					className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
				/>
			)}

			<span className="relative z-10">{label}</span>
		</RadioGroupPrimitive.Item>
	);
};

export { UserTypeSwitcher };
