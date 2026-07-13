import React from "react";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Providers from "@/components/providers";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const caveat = Caveat({
	subsets: ["latin"],
	variable: "--font-caveat",
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),
	title: {
		default: "Gustavo Oliveira · Full Stack Engineer (AI & Computer Vision)",
		template: "%s · Gustavo Oliveira",
	},
	description:
		"Full Stack Engineer with 6+ years of production experience across backend, computer vision, AI and data engineering. YOLO/PyTorch computer vision for Petrobras maritime safety, PySpark/Databricks data pipelines, Ruby on Rails, Django and SQL/NoSQL. Open to remote and contract roles.",
	keywords: [
		"Software Engineer",
		"Full Stack Developer",
		"Full Stack Engineer",
		"Backend Engineer",
		"Computer Vision Engineer",
		"AI Engineer",
		"Python",
		"YOLO",
		"PyTorch",
		"Databricks",
		"PySpark",
		"Ruby on Rails",
		"Django",
		"SQL",
		"PostgreSQL",
		"Docker",
		"Data Engineer",
		"Remote Software Engineer",
		"Contract Software Engineer",
		"LATAM Software Engineer",
		"Brazil",
		"Espírito Santo",
		"Gustavo Oliveira",
	],
	authors: [{ name: "Gustavo Oliveira" }],
	creator: "Gustavo Oliveira",
	publisher: "Gustavo Oliveira",
	openGraph: {
		type: "website",
		locale: "en_US",
		alternateLocale: "pt_BR",
		title: "Gustavo Oliveira · Full Stack Engineer (AI & Computer Vision)",
		description:
			"6+ years building production backend, computer-vision and data-engineering systems. YOLO/PyTorch computer vision for Petrobras maritime safety, PySpark/Databricks pipelines. Open to remote and contract roles.",
		siteName: "Gustavo Oliveira",
	},
	twitter: {
		card: "summary_large_image",
		title: "Gustavo Oliveira · Full Stack Engineer",
		description:
			"6+ years building production backend, AI and computer-vision systems. Open to remote and contract roles.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.variable} ${caveat.variable}`}
		>
			<body className="antialiased min-h-screen bg-background text-foreground transition-colors duration-500">
				<GoogleAnalytics />
				<SpeedInsights />
				<SmoothScroll />

				<LanguageProvider>
					<Providers>{children}</Providers>
				</LanguageProvider>
			</body>
		</html>
	);
}
