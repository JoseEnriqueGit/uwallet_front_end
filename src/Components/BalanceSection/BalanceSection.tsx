import Styles from "./BalanceSection.module.scss";
import React, { useContext } from "react";
import {
	SettingDolar,
	Wallet,
	UserWalletsSection,
	DisplayBalance,
} from "@/src/Components";
import { ViewContext } from "@/src/useContext/ViewContext";

interface GeneralViewProps {
	toggleView: () => void;
}

const GeneralView: React.FC<GeneralViewProps> = ({ toggleView }) => (
	<div className={Styles.BalanceContainer}>
		<section className={Styles.CurrencyContainer}>
			<span className={Styles.BalanceSpan}>Your Balance</span>
			<DisplayBalance />
		</section>

		<section className={Styles.BtnContainer}>
			<button onClick={toggleView} className={Styles.Button}>
				<Wallet strokeWidth={2} />
			</button>
			<button className={Styles.Button}>
				<SettingDolar strokeWidth={2} />
			</button>
		</section>
	</div>
);

const BalanceSection: React.FC = () => {
	const { currentView, setCurrentView } = useContext(ViewContext);

	const toggleView = () => {
		setCurrentView(currentView === "UserWallets" ? "General" : "UserWallets");
	};

	return (
		<>
			{currentView === "General" ? (
				<GeneralView toggleView={toggleView} />
			) : (
				<UserWalletsSection handleSeeWallets={toggleView} />
			)}
		</>
	);
};

export default BalanceSection;
