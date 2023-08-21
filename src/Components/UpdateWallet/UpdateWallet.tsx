import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useQueryClient } from "react-query";
import { SquareRoundedPlus, Minus, Plus, NumberInput } from "@/src/components";
import Styles from "./UpdateWallet.module.scss";
interface IWarningMessages {
	amountRequired: string;
	insufficientFunds: string;
}

const warningMessages: IWarningMessages = {
	amountRequired: "Please enter a value.",
	insufficientFunds: "Insufficient funds.",
};

const UpdateWallet: React.FC = (): JSX.Element => {
	const { userId } = useAuth();
	const [formState, setFormState] = useState({
		amount: "",
		isAmountFalse: false,
		hasInsufficientFunds: false,
	});
	const queryClient = useQueryClient();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormState({
			...formState,
			amount: event.target.value,
		});
	};

	const handleClick = async (transferType: string) => {
		try {
			if (!formState.amount) {
				setFormState({
					...formState,
					isAmountFalse: true,
				});
			} else {
				const response = await axios.post(`/v1/user-history`, {
					user_id: userId,
					transfer_type: transferType,
					amount: formState.amount,
					description: null,
					expenses_type: "UNDEFINED",
				});
				queryClient.invalidateQueries(["balance", userId]);
				setFormState({
					...formState,
					amount: "",
				});
			}
		} catch (error: any) {
			if (
				error?.response?.status === 400 &&
				error.response.data.error === "Insufficient funds"
			) {
				setFormState({
					...formState,
					hasInsufficientFunds: true,
				});
			} else {
				console.error(error);
			}
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (formState.isAmountFalse) {
				setFormState({
					...formState,
					isAmountFalse: false,
				});
			}
		}, 4000);

		return () => clearTimeout(timer);
	}, [formState.isAmountFalse]);

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
				value={formState.amount}
				onChange={handleInputChange}
			/>
			{formState.isAmountFalse && (
				<span className={Styles.Warning}>{warningMessages.amountRequired}</span>
			)}
			{formState.hasInsufficientFunds && (
				<span className={Styles.Warning}>
					{warningMessages.insufficientFunds}
				</span>
			)}

			<div className={Styles.ButtonContainer}>
				<button
					className={Styles.ButtonMinus}
					onClick={() => handleClick("spent")}
				>
					<Minus width={30} height={30} stroke={"#222531"} />
				</button>
				<button
					className={Styles.ButtonPlus}
					onClick={() => handleClick("income")}
				>
					<Plus width={30} height={30} stroke={"#222531"} />
				</button>
			</div>
		</div>
	);
};

export default UpdateWallet;
