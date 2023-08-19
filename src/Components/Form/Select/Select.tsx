"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Select from "react-select";
import customStyles from "./CustomStyles";

interface ICurrency {
	value: string;
	label: string;
}

interface ISelectBox {
	setCurrency: (currency: ICurrency) => void;
}

const SelectBox: React.FC<ISelectBox> = React.memo(({ setCurrency }) => {
	const { userId } = useAuth();
	const [currencies, setCurrencies] = useState<ICurrency[]>([]);

	const fetchCurrencies = async (): Promise<ICurrency[]> => {
		try {
			const response = await axios.get<ICurrency[]>(
				`/v1/users/${userId}/get-currency-rates`
			);
			return response.data;
		} catch (error) {
			console.error("An error occurred while fetching the data:", error);
			throw new Error("An error occurred while fetching the data.");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				try {
					const response = await fetchCurrencies();
					setCurrencies(response);
				} catch (error) {
					console.error("An error occurred while fetching the data:", error);
				}
			}
		};

		fetchData();
	}, [userId]);

	const options = userId
		? currencies
		: [{ value: "NO DATA", label: "NO DATA" }];

	return (
		<Select
			styles={customStyles}
			noOptionsMessage={() => "NOT FOUND"}
			options={options}
			onChange={(selectedOption) => setCurrency(selectedOption as ICurrency)}
		/>
	);
});

export default SelectBox;
