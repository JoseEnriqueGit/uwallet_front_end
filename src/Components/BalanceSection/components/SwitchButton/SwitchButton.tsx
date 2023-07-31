// Styles
import Styles from "./SwitchButton.module.scss";
import { useBalance } from "../../../../Api/getUserBalance";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { ArrowExchange } from "@/src/Components";

const SwitchButton = () => {
	const { userId } = useAuth();
	const { data: balanceData, isLoading, isError, error } = useBalance(userId!);

	useEffect(() => {
		if (isError) {
			console.error("Error fetching balance:", error);
		}
	}, [isError, error]);

	return (
		<>
			{isLoading ? (
				<output className={Styles.loadingContainer}></output>
			) : userId ? (
				<div className={Styles.SwitchButtonContainer}>
					<output className={Styles.TotalOutput}>
						{balanceData}&nbsp;
						<div>
							<div className={Styles.MainCurrency}>USD</div>
							<ArrowExchange />
							<div className={Styles.SecondCurrency}>DOP</div>
						</div>
					</output>
				</div>
			) : (
				<span>0 USD</span>
			)}
		</>
	);
};

export default SwitchButton;
