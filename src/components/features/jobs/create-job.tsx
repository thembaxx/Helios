"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateJob() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className="rounded-full h-14 w-14 shadow-lg bg-black text-white hover:bg-zinc-800 fixed bottom-24 right-6 z-50 flex items-center justify-center">
					<Plus className="h-6 w-6" />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Create New Job</DrawerTitle>
						<DrawerDescription>
							Fill in the details below to post a new job request.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 pb-0">
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="title" className="text-right">
									Title
								</Label>
								<Input
									id="title"
									placeholder="e.g. House Cleaning"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="category" className="text-right">
									Category
								</Label>
								<Input
									id="category"
									placeholder="e.g. Cleaning"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="budget" className="text-right">
									Budget
								</Label>
								<Input
									id="budget"
									placeholder="e.g. R500"
									className="col-span-3"
								/>
							</div>
						</div>
					</div>
					<DrawerFooter>
						<Button>Submit Request</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
