import Styles from "./NewWallet.module.scss";

import { X, NumberInput, Select } from "@/src/components";
import React, { useState, useContext } from "react";
import { ViewContext } from "@/src/context/ViewContext";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

const NewWallet: React.FC = (): JSX.Element => {
	const { userId } = useAuth();
	const { setCurrentView } = useContext(ViewContext);
	const [amount, setAmount] = useState("");
	const [currency, setCurrency] = useState({ value: "", label: "" });
	const [isSend, setIsSend] = useState(false);

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value);
	};

	const handleApplyClick = async () => {
		try {
			if (!amount) {
				setIsSend(true);
			} else {
				const response = await axios.post(`/v1/wallets`, {
					user_id: userId,
					currency: currency.value,
					amount: amount,
				});
				setAmount("");
				setCurrency({ value: "", label: "" });
			}
		} catch (error: any) {
			console.error(error);
		}
	};

	return (
		<section className={Styles.NewWalletContainer}>
			<div className={Styles.ContainerHead}>
				<span>NEW WALLET</span>
				<button
					onClick={() => setCurrentView("UserWallets")}
					className={Styles.CloseBtn}
				>
					<X />
				</button>
			</div>

			<div className={Styles.ContainerBody}>
				<NumberInput
					label="MONEY:"
					allowNegative={false}
					value={amount}
					onChange={handleAmountChange}
				/>
				<label className={Styles.Select}>
					CURRENCY:
					<Select setCurrency={setCurrency} />
				</label>
			</div>

			<button onClick={handleApplyClick} className={Styles.ApplyBtn}>
				APPLY
			</button>
		</section>
	);
};

export default NewWallet;
