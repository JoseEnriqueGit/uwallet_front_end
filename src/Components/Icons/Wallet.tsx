import { IconPropsTypes } from "./Types/IconPropsTypes";

const Wallet = ({
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
			className="icon icon-tabler icon-tabler-wallet"
			viewBox="0 0 24 24"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
			<path d="M20 12v4h-4a2 2 0 0 1 0-4h4" />
		</svg>
	);
};

export default Wallet;
