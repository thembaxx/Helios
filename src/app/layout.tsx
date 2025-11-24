import type { Metadata } from "next";
import "./globals.css";
import appConfig from "@/config/app,config";
import { fontSans, fontSerif } from "@/config/fonts";

import TopNavbar from "@/components/layout/top-navbar";

export const metadata: Metadata = {
	title: appConfig.name,
	description: appConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${fontSans.variable} ${fontSerif.variable} antialiased`}
			>
				<TopNavbar />
				<div className="pt-14 h-screen">
					{children}
				</div>
			</body>
		</html>
	);
}
