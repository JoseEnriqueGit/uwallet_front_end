import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";

interface BalanceData {
	balance: number;
}

const fetchBalance = async (userId: string): Promise<BalanceData> => {
	try {
		const response = await axios.get<BalanceData>(
			`https://apiuwallet.onrender.com/users/balance/${userId}`
		);
		return response.data;
	} catch (error) {
		throw new Error("An error occurred while fetching the balance data.");
	}
};

export const useBalance = (userId: string): UseQueryResult<BalanceData> => {
	return useQuery(["balance", userId], () => fetchBalance(userId));
};
