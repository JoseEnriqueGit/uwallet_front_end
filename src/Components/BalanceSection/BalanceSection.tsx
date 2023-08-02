// Styles
import Styles from "./BalanceSection.module.scss";
// Components
import {
	SettingDolar,
	Wallet,
	UserWalletsSection,
	SwitchButton,
} from "@/src/Components";
// Imports
import { useState } from "react";

const BalanceSection = () => {
	const [seeWallets, setseeWallets] = useState(false);

	const handleSeeWallets = () => {
		setseeWallets(!seeWallets);
	};

	return (
		<>
			{!seeWallets ? (
				<article className={Styles.BalanceContainer}>
					<section className={Styles.CurrencyContainer}>
						<span className={Styles.BalanceSpan}>Your Balance</span>
						<SwitchButton />
					</section>

					<section className={Styles.BtnContainer}>
						<button onClick={handleSeeWallets} className={Styles.Button}>
							<Wallet strokeWidth={2} />
						</button>
						<button className={Styles.Button}>
							<SettingDolar strokeWidth={2} />
						</button>
					</section>
				</article>
			) : (
				<UserWalletsSection handleSeeWallets={handleSeeWallets} />
			)}
		</>
	);
};

export default BalanceSection;
