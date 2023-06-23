import { SVGProps } from "react";

interface IconPropsTypes extends SVGProps<SVGSVGElement> {
	width?: number;
	height?: number;
	stroke?: string;
	strokeWidth?: number;
}

export type { IconPropsTypes };
