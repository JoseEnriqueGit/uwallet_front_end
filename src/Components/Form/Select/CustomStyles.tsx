import { CSSObject } from "@emotion/react";

const customStyles = {
	control: (provided: CSSObject) => ({
		...provided,
		height: "36px",
		borderRadius: 5,
		borderColor: "none",
		borderWidth: 2,
		boxShadow: "none",
		padding: 0,
		"&:hover": {
			borderColor: "#87ff7c",
		},
	}),
	input: (provided: CSSObject) => ({
		...provided,
		height: "36px",
		padding: 0,
		margin: 0,
	}),
	valueContainer: (provided: CSSObject, state: any) => ({
		...provided,
		fontSize: "medium",
		padding: "0px 6px",
		fontWeight: 600,
	}),
	option: (provided: CSSObject, state: any) => ({
		...provided,
		color: state.isSelected ? "#242935" : "#242935",
		padding: 10,
		fontWeight: 600,
	}),
	singleValue: (provided: CSSObject, state: any) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = "opacity 300ms";

		return { ...provided, opacity, transition };
	},
	noOptionsMessage: (provided: CSSObject, state: any) => ({
		...provided,
		color: "#242935",
	}),
};
export default customStyles;
