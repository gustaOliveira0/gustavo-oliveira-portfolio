import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CV / Resume",
	description:
		"Gustavo Oliveira — Full Stack Engineer, AI & Computer Vision. 6+ years of professional experience, YOLO/PyTorch computer vision for Petrobras maritime safety, PySpark/Databricks data pipelines, Ruby on Rails, Django, SQL/NoSQL. Open to remote and contract roles.",
	openGraph: {
		title: "CV · Gustavo Oliveira",
		description:
			"Full Stack Engineer · 6+ years · AI & Computer Vision · Python, YOLO, Databricks, Ruby on Rails. Open to remote and contract roles.",
		type: "profile",
	},
	twitter: {
		card: "summary_large_image",
		title: "CV · Gustavo Oliveira",
		description:
			"Full Stack Engineer · 6+ years · Open to remote and contract roles.",
	},
};

export default function CvLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
