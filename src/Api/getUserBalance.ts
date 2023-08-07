import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";

interface BalanceData {
	balance: number;
	hasSecondWallet: boolean;
	secondWalletCurrency: string;
}

const fetchBalance = async (userId: string): Promise<BalanceData> => {
	try {
		const response = await axios.get<BalanceData>(
			`/v1/users/wallet-information/${userId}`
		);
		return response.data;
	} catch (error) {
		throw new Error("An error occurred while fetching the balance data.");
	}
};

export const useBalance = (userId: string): UseQueryResult<BalanceData> => {
	return useQuery(["balance", userId], () => fetchBalance(userId));
};
