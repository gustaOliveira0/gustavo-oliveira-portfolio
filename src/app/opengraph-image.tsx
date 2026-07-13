import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gustavo Oliveira · Full Stack Engineer (AI & Computer Vision)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "80px",
					backgroundColor: "#0a0a0a",
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
					backgroundSize: "48px 48px",
					color: "#fafafa",
					fontFamily:
						"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
				}}
			>
				{/* Top: kicker + name + role */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "14px",
					}}
				>
					<div
						style={{
							display: "flex",
							fontSize: "32px",
							color: "#a3a3a3",
							letterSpacing: "0.02em",
						}}
					>
						{"// software engineer"}
					</div>
					<div
						style={{
							display: "flex",
							fontSize: "128px",
							fontWeight: 800,
							lineHeight: 1.05,
							letterSpacing: "-0.03em",
							backgroundImage:
								"linear-gradient(to right, #fafafa 0%, #c4b5fd 35%, #d946ef 70%, #ec4899 100%)",
							backgroundClip: "text",
							color: "transparent",
						}}
					>
						Gustavo Oliveira
					</div>
					<div
						style={{
							display: "flex",
							fontSize: "44px",
							fontWeight: 500,
							color: "#d4d4d4",
							letterSpacing: "-0.01em",
						}}
					>
						Full Stack · AI & Computer Vision
					</div>
				</div>

				{/* Bottom: tagline + URL */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "12px",
					}}
				>
					<div
						style={{
							display: "flex",
							fontSize: "28px",
							color: "#a3a3a3",
						}}
					>
						6+ years · Computer vision for Petrobras · Open to remote
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "16px",
							fontSize: "26px",
							color: "#737373",
						}}
					>
						<div
							style={{
								display: "flex",
								width: "12px",
								height: "12px",
								borderRadius: "9999px",
								backgroundImage:
									"linear-gradient(to right, #a855f7, #ec4899)",
							}}
						/>
						github.com/gustaOliveira0
					</div>
				</div>
			</div>
		),
		{ ...size },
	);
}
