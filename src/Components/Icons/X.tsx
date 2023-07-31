import { IconPropsTypes } from "./Types/IconPropsTypes";

const X = ({
	width = 24,
	height = 24,
	stroke = "currentColor",
	strokeWidth = 3,
	...props
}: IconPropsTypes) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			stroke={stroke}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={strokeWidth}
			className="icon icon-tabler icon-tabler-x"
			viewBox="0 0 24 24"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M18 6 6 18M6 6l12 12" />
		</svg>
	);
};

export default X;
