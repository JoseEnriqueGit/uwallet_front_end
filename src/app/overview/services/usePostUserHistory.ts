import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

function usePostUserHistory() {
	const queryClient = useQueryClient();
	const { userId } = useAuth();

	interface PostUserHistoryMutation {
		transfer_type: string;
		amount: string;
		description?: string | null;
		expenses_type?: string | null;
	}

	const mutation = useMutation(
		({
			transfer_type,
			amount,
			description,
			expenses_type,
		}: PostUserHistoryMutation) => {
			return axios.post(`/v1/user-history`, {
				user_id: userId,
				transfer_type: transfer_type,
				amount: amount,
				description: description,
				expenses_type: expenses_type,
			});
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["balance", userId]);
			},
			onError: (error, _variables, _context) => {
				console.log(error);
			},
		}
	);

	return mutation;
}

export default usePostUserHistory;
