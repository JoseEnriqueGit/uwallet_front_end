import { IconPropsTypes } from "./Types/IconPropsTypes";

const NewFile = ({
	width = 24,
	height = 24,
	stroke = "currentColor",
	strokeWidth = 3,
	...props
}: IconPropsTypes) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill="none"
		stroke={stroke}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		className="icon icon-tabler icon-tabler-file-plus"
		viewBox="0 0 24 24"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" />
		<path d="M14 3v4a1 1 0 0 0 1 1h4" />
		<path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM12 11v6M9 14h6" />
	</svg>
);
export default NewFile;
