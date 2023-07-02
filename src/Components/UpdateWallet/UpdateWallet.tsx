// Styles
import Styles from "./UpdateWallet.module.scss";
// Components
import {
	NewFile,
	SquareRoundedPlus,
	Minus,
	Plus,
	NumberInput,
} from "@/src/Components";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

const UpdateWallet = () => {
	const { userId } = useAuth();
	const [amount, setAmount] = useState(0);

	const handleInputChange = (event: any) => {
		setAmount(event.target.value);
	};

	const handleClickMinus = async (userId: any, amount: any, transferType: any) => {
		try {
			const response = await axios.post(
				"https://apiuwallet.onrender.com/user-history",
				{
					user_id: userId,
					transfer_type: transferType,
					amount: amount,
					description: "",
					expenses_type: "UNDEFINED",
				}
			);
			console.log(response.data); // Hacer algo con la respuesta del backend si es necesario
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={Styles.UpdateWalletContainer}>
			<div className={Styles.UpdateWalletHead}>
				<div>
					<NewFile strokeWidth={2.5} />
					<span>UPDATE WALLET</span>
				</div>
				<SquareRoundedPlus strokeWidth={2.5} />
			</div>

			<NumberInput label="MONEY:" allowNegative={false} value={amount} onChange={handleInputChange} />

			<div className={Styles.ButtonContainer}>
				<button className={Styles.ButtonMinus} onClick={() => handleClickMinus(userId, amount, "spent")}>
					<Minus width={30} height={30} stroke={"#222531"} />
				</button>
				<button className={Styles.ButtonPlus} onClick={() => handleClickMinus(userId, amount, "income")}>
					<Plus width={30} height={30} stroke={"#222531"} />
				</button>
			</div>
		</div>
	);
};

export default UpdateWallet;
