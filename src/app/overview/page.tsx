"use client";
// Styles
import Styles from "./Overview.module.scss";
// React
import React, { useContext } from "react";
// Components
import { BalanceSection, UpdateWallet, NewWallet } from "@/src/Components";
import { ViewContext } from "@/src/useContext/ViewContext";

enum CurrentView {
	General = "General",
	UserWallets = "UserWallets",
	NewWallet = "NewWallet",
}

const OverviewPage: React.FC = (): JSX.Element => {
	const { currentView } = useContext(ViewContext);

	return (
		<article className={Styles.ArticContainer}>
			{currentView === CurrentView.General ? (
				<>
					<BalanceSection />
					<UpdateWallet />
				</>
			) : (
				currentView === CurrentView.UserWallets && <BalanceSection />
			)}

			{currentView === CurrentView.NewWallet && <NewWallet />}
		</article>
	);
};

export default OverviewPage;
