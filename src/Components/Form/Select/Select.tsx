import React, { useState } from "react";

import Select from "react-select";
import { options } from "./dataExample";
import customStyles from "./CustomStyles";

export default () => {
	const [isClearable, setIsClearable] = useState(true);
	const [isSearchable, setIsSearchable] = useState(true);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isRtl, setIsRtl] = useState(false);

	return (
		<Select
			styles={customStyles}
			noOptionsMessage={() => "NOT FOUND"}
			defaultValue={options[0]}
			options={options}
		/>
	);
};
