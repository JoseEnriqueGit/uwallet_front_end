// Styles
import Styles from "./WalletsList.module.scss";
// Components
import { SquareRounded, SquareRoundedMinus } from "@/src/Components";
import { useState } from "react";

const WalletsList = () => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<div className={Styles.ContainerWalletCard}>
			{isClicked ? (
				<SquareRoundedMinus width={32} onClick={handleClick} />
			) : (
				<SquareRounded width={32} onClick={handleClick} />
			)}

			<div className={Styles.ContainerBody}>
				<div className={Styles.ContainerWallet}>
					<span className={Styles.WalletName}>DOP WALLET</span>
					<span className={Styles.WalletBalance}>2000 DOP</span>
				</div>
				<div className={Styles.ContainerTranstion}>
					<span className={Styles.LastTransactionTitle}>LAST TRANSACTION</span>
					<span className={Styles.LastTransactionSpent}>&ndash;500</span>
					{/* <span className={Styles.LastTransactionIncome}>&ndash;500</span> */}
				</div>
			</div>
		</div>
	);
};

export default WalletsList;
