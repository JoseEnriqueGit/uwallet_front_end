import { ApiBalanceData, BalanceData } from "../models";
import { BalanceDataAdapter } from "../adapter";

import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";

const fetchBalance = async (userId: string): Promise<ApiBalanceData> => {
	try {
		const response = await axios.get<ApiBalanceData>(
			`/v1/users/${userId}/wallet-information`
		);
		return BalanceDataAdapter(response.data);
	} catch (error) {
		throw new Error("An error occurred while fetching the balance data.");
	}
};

export const getBalance = (userId: string): UseQueryResult<BalanceData> => {
	return useQuery(["balance", userId], () => fetchBalance(userId));
};
