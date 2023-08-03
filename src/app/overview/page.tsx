"use client";
// Styles
import Styles from "./Overview.module.scss";
// React
import React, { useContext } from "react";
// Components
import { BalanceSection, UpdateWallet } from "@/src/Components";
import { ViewContext } from "@/src/useContext/ViewContext";

enum CurrentView {
	General = "General",
	UserWallets = "UserWallets",
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
		</article>
	);
};

export default OverviewPage;
