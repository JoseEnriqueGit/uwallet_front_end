import Styles from "./NumberInput.module.scss";
import { NumericFormat } from "react-number-format";

interface IInputNumberProps {
	label: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	allowNegative?: boolean;
	maxLength?: number;
}

const NumberInput = (props: IInputNumberProps) => {
	return (
		<label className={Styles.Label}>
			{props.label}
			<NumericFormat
				value={props.value || ""}
				onChange={props.onChange}
				allowLeadingZeros
				thousandSeparator=","
				allowNegative={props.allowNegative}
				decimalScale={2}
				maxLength={props.maxLength || 10}
			/>
		</label>
	);
};

export default NumberInput;
