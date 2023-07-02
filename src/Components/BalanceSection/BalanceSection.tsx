// Styles
import Styles from "./BalanceSection.module.scss";
// Components
import { Coins } from "@/src/Components";
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
		<div className={Styles.BalanceContainer}>
			<span className={Styles.BalanceSpan}>Balance total</span>
			<div className={Styles.TotalOutput}>
				<Coins strokeWidth={2.5} />

				{isLoading ? (
					<span className={Styles.loadingContainer}>Loading...</span>
				) : userId ? (
					<span>{balanceData} Pesos</span>
				) : (
					<span>0 Pesos</span>
				)}
			</div>
		</div>
	);
};

export default BalanceSection;
