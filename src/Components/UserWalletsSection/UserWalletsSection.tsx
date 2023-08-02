// Styles
import Styles from "./UserWalletsSection.module.scss";
// Components
import { X, Plus, WalletsList } from "@/src/Components";

interface Props {
	handleSeeWallets: () => void;
}

const UserWalletsSection = (props: Props) => {

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
				<span>Your Balance</span>
				<span className={Styles.Balance}>1500.00 USD</span>
			</section>

			<section className={Styles.ContainerWalletsList}>
				<div className={Styles.ContainerHead}>
					<span>YOUR WALLETS</span>
					<button>
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
