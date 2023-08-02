import { IconPropsTypes } from "./Types/IconPropsTypes";

const ArrowExchange = ({
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
			className="icon icon-tabler icon-tabler-square-rounded"
			viewBox="0 0 24 24"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
		</svg>
	);
};

export default ArrowExchange;
