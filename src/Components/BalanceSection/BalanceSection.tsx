// Styles
import Styles from "./BalanceSection.module.scss";
// Components
import { SettingDolar, ArrowExchange } from "@/src/Components";
// Imports
import { useBalance } from "../../Api/getUserBalance";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

const BalanceSection = () => {
	const { userId } = useAuth();
	const { data: balanceData, isLoading, isError, error } = useBalance(userId!);

	useEffect(() => {
		if (isError) {
			console.error("Error fetching balance:", error);
		}
	}, [isError, error]);

	return (
		<article className={Styles.BalanceContainer}>
			<section className={Styles.CurrencyContainer}>
				<span className={Styles.BalanceSpan}>Your Balance</span>
				<div className={Styles.TotalOutput}>
					{isLoading ? (
						<output className={Styles.loadingContainer}></output>
					) : userId ? (
						<output>
							{balanceData}
							<div>
								<div className={Styles.MainCurrency}>USD</div>
								<ArrowExchange />
								<div className={Styles.SecondCurrency}>DOP</div>
							</div>
						</output>
					) : (
						<span>0 USD</span>
					)}
				</div>
				<div className={Styles.PriceCurrency}>
					<span>
						<div className={Styles.MainCurrencyPrice}>1 USD</div>
						<div>=</div>
						<div className={Styles.SecondCurrencyPrice}>55.76 DOP</div>
					</span>
				</div>
			</section>

			<section className={Styles.BtnContainer}>
				<button className={Styles.Button}>
					<SettingDolar strokeWidth={2} />
				</button>
			</section>
		</article>
	);
};

export default BalanceSection;
