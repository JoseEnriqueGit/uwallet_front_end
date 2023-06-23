import { IconPropsTypes } from "./Types/IconPropsTypes";

const Coins = ({
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
    className="icon icon-tabler icon-tabler-coins"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 14c0 1.657 2.686 3 6 3s6-1.343 6-3-2.686-3-6-3-6 1.343-6 3z" />
    <path d="M9 14v4c0 1.656 2.686 3 6 3s6-1.344 6-3v-4M3 6c0 1.072 1.144 2.062 3 2.598s4.144.536 6 0c1.856-.536 3-1.526 3-2.598 0-1.072-1.144-2.062-3-2.598s-4.144-.536-6 0C4.144 3.938 3 4.928 3 6z" />
    <path d="M3 6v10c0 .888.772 1.45 2 2" />
    <path d="M3 11c0 .888.772 1.45 2 2" />
  </svg>
)
export default Coins
