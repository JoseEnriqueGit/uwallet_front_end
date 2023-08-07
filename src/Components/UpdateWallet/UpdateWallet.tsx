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
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useQueryClient } from "react-query";

const UpdateWallet = () => {
	const { userId } = useAuth();
	const [amount, setAmount] = useState(undefined);
	const [isAmountFalse, setIsAmountFalse] = useState(false);
	const [hasInsufficientFunds, setHasInsufficientFunds] = useState(false);
	const queryClient = useQueryClient();

	const handleInputChange = (event: any) => {
		setAmount(event.target.value);
	};

	const handleClick = async (userId: any, amount: any, transferType: any) => {
		try {
			if (!amount) {
				setIsAmountFalse(true);
			} else {
				const response = await axios.post(
					`/v1/user-history`,
					{
						user_id: userId,
						transfer_type: transferType,
						amount: amount,
						description: null,
						expenses_type: "UNDEFINED",
					}
				);
				queryClient.invalidateQueries(["balance", userId]);
				setAmount(undefined);
			}
		} catch (error: any) {
			if (
				error.response &&
				error.response.status === 400 &&
				error.response.data.error === "Insufficient funds"
			) {
				setHasInsufficientFunds(true);
			} else {
				console.error(error);
			}
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (isAmountFalse) {
				setIsAmountFalse(false);
			}
		}, 4000);

		return () => clearTimeout(timer);
	}, [isAmountFalse]);

	return (
		<div className={Styles.UpdateWalletContainer}>
			<div className={Styles.UpdateWalletHead}>
				<div>
					<span>UPDATE WALLET</span>
				</div>
				<SquareRoundedPlus strokeWidth={2.5} />
			</div>

			<NumberInput
				label="MONEY:"
				allowNegative={false}
				value={amount}
				onChange={handleInputChange}
			/>
			{isAmountFalse ? (
				<span className={Styles.Warning}>Please enter a value.</span>
			) : null}
			{hasInsufficientFunds ? (
				<span className={Styles.Warning}>Insufficient funds.</span>
			) : null}

			<div className={Styles.ButtonContainer}>
				<button
					className={Styles.ButtonMinus}
					onClick={() => handleClick(userId, amount, "spent")}
				>
					<Minus width={30} height={30} stroke={"#222531"} />
				</button>
				<button
					className={Styles.ButtonPlus}
					onClick={() => handleClick(userId, amount, "income")}
				>
					<Plus width={30} height={30} stroke={"#222531"} />
				</button>
			</div>
		</div>
	);
};

export default UpdateWallet;
