import Styles from "./Input.module.scss";

interface IInputProps {
	type: string;
	id: string;
	autoComplete: string;
	disabled?: boolean;
	focus: boolean;
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	min?: number;
	label: string;
}

const Input = (props: IInputProps) => {
	return (
		<>
			<label className={Styles.Label}>
				{props.label}
				<input
					className={Styles.Input}
					type={props.type}
					id={props.id}
					autoComplete={props.autoComplete}
					disabled={props.disabled}
					autoFocus={props.focus}
					defaultValue={props.defaultValue || ""}
					onChange={props.onChange}
					min={props.min}
					required
				/>
			</label>
		</>
	);
};

export default Input;
