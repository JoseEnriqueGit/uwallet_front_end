// Styles
import Styles from "./BalanceSection.module.scss";
// Components
import { Coins } from "@/src/Components";

import { useBalance } from "../../Api/getUserBalance";
import { useEffect } from "react";

interface BalanceSectionProps {
	userId: string;
	balance: number;
}

const BalanceSection = ({ balance, userId }: BalanceSectionProps) => {
	const { data: balanceData, isLoading, isError, error } = useBalance(userId);

	useEffect(() => {
		if (isError) {
			console.error("Error fetching balance:", error);
		}
	}, [isError, error]);

	return (
		<div className={Styles.BalanceContainer}>
			<span className={Styles.BalanceSpan}>Balance total</span>
			<div className={Styles.TotalOutput}>
				<Coins strokeWidth={2.5} />

				{isLoading ? (
					<span className={Styles.loadingContainer}>Loading...</span>
				) : (
					<span>{balanceData} Pesos</span>
				)}
			</div>
		</div>
	);
};

export default BalanceSection;
