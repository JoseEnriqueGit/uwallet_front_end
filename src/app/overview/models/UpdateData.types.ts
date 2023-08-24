export interface ApiUpdateData {
	user_id: string;
	transfer_type: string;
	amount: number;
	description: string | null;
	expenses_type: string | "UNDEFINED";
}

export interface UpdateData {
	user_id: string;
	transfer_type: string;
	amount: number;
	description: string | null;
	expenses_type: string | "UNDEFINED";
}

export const UpdateDataEmptyState: ApiUpdateData = {
	user_id: "",
	transfer_type: "",
	amount: 0,
	description: null,
	expenses_type: "UNDEFINED",
};
