import { IconPropsTypes } from "./Types/IconPropsTypes";

const SquareRoundedPlus = ({
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
		className="icon icon-tabler icon-tabler-square-rounded-plus-filled"
		viewBox="0 0 24 24"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			stroke="none"
			d="m12 2 .324.001.318.004.616.017.299.013.579.034.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553.034.579c.005.098.01.198.013.299l.017.616L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046-.579.034c-.098.005-.198.01-.299.013l-.616.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553-.034-.579a28.058 28.058 0 0 1-.013-.299l-.017-.616C2.002 12.432 2 12.218 2 12l.001-.324.004-.318.017-.616.013-.299.034-.579.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046.579-.034c.098-.005.198-.01.299-.013l.616-.017c.21-.003.424-.005.642-.005zm0 6a1 1 0 0 0-1 1v2H9l-.117.007A1 1 0 0 0 9 13h2v2l.007.117A1 1 0 0 0 13 15v-2h2l.117-.007A1 1 0 0 0 15 11h-2V9l-.007-.117A1 1 0 0 0 12 8z"
		/>
	</svg>
);
export default SquareRoundedPlus;
