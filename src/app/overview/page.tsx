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

	if (currentView === CurrentView.UserWallets) {
		return (
			<article className={Styles.ArticContainer}>
				<BalanceSection />
			</article>
		);
	}

	if (currentView === CurrentView.NewWallet) {
		return (
			<article className={Styles.ArticContainer}>
				<NewWallet />
			</article>
		);
	}

	return (
		<article className={Styles.ArticContainer}>
			<BalanceSection />
			<UpdateWallet />
		</article>
	);
};

export default OverviewPage;
