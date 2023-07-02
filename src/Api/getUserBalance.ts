import { useQuery } from "react-query";
import axios from "axios";

const fetchBalance = async (userId: string) => {
	const response = await axios.get(
		`https://apiuwallet.onrender.com/users/balance/${userId}`
	);
	return response.data;
};

export const useBalance = (userId: string) => {
	return useQuery(["balance", userId], () => fetchBalance(userId));
};
