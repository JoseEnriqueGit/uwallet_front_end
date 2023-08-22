// Styles
import Styles from "./UserWalletsSection.module.scss";
// Components
import { Plus, X } from "@/src/components";
import { WalletsList } from "../";

import { ViewContext } from "@/src/context/ViewContext";
import { useAuth } from "@clerk/nextjs";
import { useContext, useEffect } from "react";
import { useBalance } from "../../../../api/getUserBalance";

interface Props {
	handleSeeWallets: () => void;
}

const UserWalletsSection = (props: Props) => {
	const { currentView, setCurrentView } = useContext(ViewContext);
	const { userId } = useAuth();
	const { data, isError, error } = useBalance(userId!);

	useEffect(() => {
		if (isError) {
			console.error("Error fetching balance:", error);
		}
	}, [isError, error]);

	const toggleView = () => {
		setCurrentView(currentView === "UserWallets" ? "NewWallet" : "UserWallets");
	};

	return (
		<article className={Styles.UserWalletsSectionContainer}>
			<section className={Styles.ContainerHead}>
				<div className={Styles.CurrentWalletContainer}>
					<span>
						<span className={Styles.CurrentWallet}>{data?.currency}&nbsp;</span>
						WALLET
					</span>
				</div>
				<button onClick={props.handleSeeWallets}>
					<X />
				</button>
			</section>

			<section className={Styles.CurrentBalanceContainer}>
				<span className={Styles.Title}>Your Balance</span>
				<span className={Styles.Balance}>
					{data?.balance}&nbsp;{data?.currency}
				</span>
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
