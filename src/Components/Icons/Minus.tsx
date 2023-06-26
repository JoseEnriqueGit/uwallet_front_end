import { IconPropsTypes } from "./Types/IconPropsTypes";

const Minus = ({
	width = 24,
	height = 24,
	fill = "none",
	stroke = "currentColor",
	strokeWidth = 3,
	...props
}: IconPropsTypes) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    stroke="#2c3e50"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    className="icon icon-tabler icon-tabler-minus"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 12h14" />
  </svg>
);
export default Minus;
