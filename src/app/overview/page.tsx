"use client";
// Styles
import Styles from "./Overview.module.scss";
// React
import React, { useContext } from "react";
// Components
import {
	BalanceSection,
	NewWallet,
	UpdateWallet,
	UserWalletsSection,
} from "./components";

import { ViewContext } from "@/src/context/ViewContext";

enum CurrentView {
	Overview = "Overview",
	UserWallets = "UserWallets",
	NewWallet = "NewWallet",
}

const OverviewPage: React.FC = (): JSX.Element => {
	const { currentView } = useContext(ViewContext);

	if (currentView === CurrentView.UserWallets) {
		return (
			<article className={Styles.ArticContainer}>
				<UserWalletsSection />
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
