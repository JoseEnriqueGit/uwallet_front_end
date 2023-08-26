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

const renderCurrentView = new Map();
renderCurrentView.set(
	CurrentView.Overview,
	<>
		<BalanceSection />
		<UpdateWallet />
	</>
);
renderCurrentView.set(CurrentView.UserWallets, <UserWalletsSection />);
renderCurrentView.set(CurrentView.NewWallet, <NewWallet />);

const OverviewPage: React.FC = (): JSX.Element => {
	const { currentView } = useContext(ViewContext);

	const multiConditionalInit = (itemToGet: string) => {
		return renderCurrentView.has(itemToGet) ? (
			renderCurrentView.get(itemToGet)
		) : (
			<div>Something went wrong...</div>
		);
	};

	return (
		<article className={Styles.ArticContainer}>
			{multiConditionalInit(currentView)}
		</article>
	);
};

export default OverviewPage;
