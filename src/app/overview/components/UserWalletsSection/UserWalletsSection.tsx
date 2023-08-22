// Styles
import Styles from "./UserWalletsSection.module.scss";
// Components
import { X } from "@/src/components";
import { ContainerWalletsList } from "./components";

import { ViewContext } from "@/src/context/ViewContext";
import { useAuth } from "@clerk/nextjs";
import React, { useContext } from "react";
import { getBalance } from "../../services";

const UserWalletsSection: React.FC = (): JSX.Element => {
	const { userId } = useAuth();
	const { setCurrentView } = useContext(ViewContext);
	const { data } = getBalance(userId!);

	return (
		<article className={Styles.UserWalletsSectionContainer}>
			<section className={Styles.ContainerHead}>
				<div className={Styles.CurrentWalletContainer}>
					<span>
						<span className={Styles.CurrentWallet}>{data?.currency}&nbsp;</span>
						WALLET
					</span>
				</div>
				<button onClick={() => setCurrentView("Overview")}>
					<X />
				</button>
			</section>

			<section className={Styles.CurrentBalanceContainer}>
				<span className={Styles.Title}>Your Balance</span>
				<span className={Styles.Balance}>
					{data?.balance}&nbsp;{data?.currency}
				</span>
			</section>

			<ContainerWalletsList />
		</article>
	);
};

export default UserWalletsSection;
