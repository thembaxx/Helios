"use client";

import Image from "next/image";
import type React from "react";
import { mockDriver } from "./live-card-types";

type LiveCardProps = {
	data?: {
		name: string;
		status: string;
		eta: string;
	};
};

const LiveCard: React.FC<LiveCardProps> = ({ data }) => {
	data = mockDriver;

	return (
		<div className="flex items-center justify-center font-sans">
			{/* --- Main Card Container (Glassmorphism) --- */}
			<div className="relative w-full max-w-sm overflow-hidden rounded-4xl border border-white/60 bg-white/40 p-5 shadow-2xl backdrop-blur-xl">
				{/* Header */}
				<div className="mb-4 px-1">
					<h2 className="text-xl font-bold text-slate-800 tracking-tight">
						Live Card
					</h2>
				</div>

				{/* Map Container */}
				<div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-inner ring-1 ring-black/5">
					{/* Map Background Image (Placeholder for an actual map) */}
					<Image
						//src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.4194,37.7749,12,0/600x600?access_token=YOUR_TOKEN_HERE"
						// Fallback to a generic map-like pattern if you don't have a mapbox token,
						// or use a solid color/image for the 'exact' look:
						src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/Apple-maps-app.png"
						className="absolute top-0 left-0 inset-0 h-full w-full object-cover opacity-80 grayscale-[0.3]"
						alt="Live Map"
						height={256}
						width={256}
						// Using a colored div as fallback for the visual demo
						onError={(e) => {
							e.currentTarget.style.display = "none";
							e.currentTarget.parentElement?.classList.add("bg-slate-200");
						}}
					/>

					{/* Fallback geometric background to mimic the image provided perfectly without an API */}
					<div
						className="absolute inset-0 bg-[#e6e6e9]"
						style={{
							backgroundImage: "radial-gradient(#cfcfd1 1px, transparent 1px)",
							backgroundSize: "20px 20px",
						}}
					></div>

					{/* --- The Pulse Marker --- */}
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						{/* Outer Ring (Faintest) */}
						<div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/20 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.2)]"></div>

						{/* Middle Ring */}
						<div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-600/30 bg-amber-600/20 backdrop-blur-sm"></div>

						{/* Center Dot */}
						<div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 shadow-lg ring-2 ring-white">
							<div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
						</div>
					</div>
				</div>

				{/* Footer Info */}
				<div className="mt-5 flex items-center justify-between px-2">
					<div className="flex items-center gap-2">
						<span className="font-semibold text-slate-800 text-lg">
							{data.name}
						</span>
						<span className="text-slate-500 font-medium">is {data.status}</span>
					</div>
					<div className="rounded-full bg-white/50 px-3 py-1 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-black/5">
						{data.eta}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LiveCard;
