import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "geospatialmedia.s3.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "unsplash.com",
			},
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
			},
		],
	},
};

export default nextConfig;
