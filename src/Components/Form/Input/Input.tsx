import Styles from "./Input.module.scss";

interface IInputProps {
	label: string;
	type: string;
	id?: string;
	autoComplete?: string;
	disabled?: boolean;
	focus?: boolean;
	defaultValue?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	min?: number;
}

const Input = (props: IInputProps) => {
	return (
		<label className={Styles.Label}>
			{props.label}
			<input
				className={Styles.Input}
				type={props.type}
				id={props.id}
				autoComplete={props.autoComplete}
				disabled={props.disabled}
				autoFocus={props.focus}
				// defaultValue={props.defaultValue || ""}
				value={props.value || ""}
				onChange={props.onChange}
				min={props.min}
				required
			/>
		</label>
	);
};

export default Input;
