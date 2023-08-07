// Styles
import Styles from "./UserWalletsSection.module.scss";
// Components
import { X, Plus, WalletsList } from "@/src/Components";

import React, { useContext } from "react";
import { ViewContext } from "@/src/useContext/ViewContext";

interface Props {
	handleSeeWallets: () => void;
}

const UserWalletsSection = (props: Props) => {
	const { currentView, setCurrentView } = useContext(ViewContext);

	const toggleView = () => {
		setCurrentView(currentView === "UserWallets" ? "NewWallet" : "UserWallets");
	};

	return (
		<article className={Styles.UserWalletsSectionContainer}>
			<section className={Styles.ContainerHead}>
				<div className={Styles.CurrentWalletContainer}>
					<span>
						<span className={Styles.CurrentWallet}>USD&nbsp;</span>WALLET
					</span>
				</div>
				<button onClick={props.handleSeeWallets}>
					<X />
				</button>
			</section>

			<section className={Styles.CurrentBalanceContainer}>
				<span className={Styles.Title}>Your Balance</span>
				<span className={Styles.Balance}>1500.00 USD</span>
			</section>

			<section className={Styles.ContainerWalletsList}>
				<div className={Styles.ContainerHead}>
					<span>YOUR WALLETS</span>
					<button onClick={toggleView}>
						<Plus />
					</button>
				</div>
			</section>

			<WalletsList />
			<WalletsList />
		</article>
	);
};

export default UserWalletsSection;
