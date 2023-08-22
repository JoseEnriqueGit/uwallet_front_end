import Styles from "./ContainerWalletsList.module.scss";

import { Plus } from "@/src/components";
import { WalletsList } from "../";
import { ViewContext } from "@/src/context/ViewContext";
import React, { useContext } from "react";

const ContainerWalletsList: React.FC = (): JSX.Element => {
	const { setCurrentView } = useContext(ViewContext);

	return (
		<>
			<section className={Styles.ContainerWalletsList}>
				<div className={Styles.ContainerHead}>
					<span>YOUR WALLETS</span>
					<button onClick={() => setCurrentView("NewWallet")}>
						<Plus />
					</button>
				</div>
			</section>

			<WalletsList />
			<WalletsList />
		</>
	);
};

export default ContainerWalletsList;
