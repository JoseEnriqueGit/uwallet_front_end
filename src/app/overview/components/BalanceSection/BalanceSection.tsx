import Styles from "./BalanceSection.module.scss";

import { SettingDolar, Wallet } from "@/src/components";
import { DisplayBalance } from "./components";

import { ViewContext } from "@/src/context/ViewContext";
import React, { useContext } from "react";

const BalanceSection: React.FC = (): JSX.Element => {
	const { setCurrentView } = useContext(ViewContext);

	return (
		<div className={Styles.BalanceContainer}>
			<section className={Styles.CurrencyContainer}>
				<span className={Styles.BalanceSpan}>Your Balance</span>
				<DisplayBalance />
			</section>

			<section className={Styles.BtnContainer}>
				<button
					onClick={() => setCurrentView("UserWallets")}
					className={Styles.Button}
				>
					<Wallet strokeWidth={2} />
				</button>
				<button className={Styles.Button}>
					<SettingDolar strokeWidth={2} />
				</button>
			</section>
		</div>
	);
};

export default BalanceSection;
