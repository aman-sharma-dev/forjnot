"use client";

import { cn } from "@/lib/utils";

interface GlowingBorderProps {
	children: React.ReactNode;
	className?: string;
}

export function GlowingBorder({
	children,
	className,
}: Readonly<GlowingBorderProps>) {
	return (
		<div className={cn("relative rounded-lg", className)}>
			<div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-chart-1/40 via-chart-2/40 to-chart-4/40 blur-sm" />
			<div className="relative rounded-lg border bg-card">{children}</div>
		</div>
	);
}
