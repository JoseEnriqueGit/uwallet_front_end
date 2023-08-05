import Styles from "./NewWallet.module.scss";

import { X, NumberInput, Select } from "@/src/Components";
import React, { useState, useContext } from "react";
import { ViewContext } from "@/src/useContext/ViewContext";

const NewWallet = () => {
	const { currentView, setCurrentView } = useContext(ViewContext);
  const [amount, setAmount] = useState(undefined);

	const toggleView = () => {
		setCurrentView(currentView === "UserWallets" ? "NewWallet" : "UserWallets");
	};

	const handleInputChange = (event: any) => {
		setAmount(event.target.value);
	};

	return (
		<section className={Styles.NewWalletContainer}>
			<div className={Styles.ContainerHead}>
				<span>NEW WALLET</span>
				<button>
					<X onClick={toggleView} />
				</button>
			</div>

			<div className={Styles.ContainerBody}>
				<NumberInput
					label="MONEY:"
					allowNegative={false}
					value={amount}
					onChange={handleInputChange}
				/>
				<label>
					CURRENCY:
					<Select />
				</label>
			</div>

			<button className={Styles.ApplyBtn}>APPLY</button>
		</section>
	);
};

export default NewWallet;
