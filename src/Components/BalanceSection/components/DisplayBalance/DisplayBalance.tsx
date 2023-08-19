// Styles
import Styles from "./DisplayBalance.module.scss";

import { ArrowExchange } from "@/src/Components";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useBalance } from "../../../../api/getUserBalance";

interface BanlaceProps {
	balance: number;
	currency: string;
	secondWalletCurrency?: string;
}

const DisplayBalance: React.FC = (): JSX.Element => {
	const { userId } = useAuth();
	const queryClient = useQueryClient();
	const { data, isLoading, isError, error } = useBalance(userId!);
	const { balance, currency, secondWalletCurrency, hasSecondWallet } = data || {
		balance: 0,
		currency: "",
		secondWalletCurrency: "",
	};

	useEffect(() => {
		if (isError) {
			console.error("Error fetching balance:", error);
		}
	}, [isError, error]);

	const handleSwitchWallet = async () => {
		try {
			await axios.patch(`/v1/users/${userId}/switchWallet`);
			queryClient.invalidateQueries(["balance", userId]);
		} catch (error: any) {
			console.error(error);
		}
	};

	const SoloBanlace = ({ balance, currency }: BanlaceProps): JSX.Element => {
		return (
			<div className={Styles.SoloBanlace}>
				{balance}
				&nbsp;
				{currency}
			</div>
		);
	};

	const SwitchButton = ({
		balance,
		currency,
		secondWalletCurrency,
	}: BanlaceProps): JSX.Element => {
		return (
			<div
				className={Styles.SwitchButtonContainer}
				onClick={handleSwitchWallet}
			>
				<span className={Styles.MainWalletContainer}>
					{balance}
					&nbsp;
					{currency}
				</span>
				<span className={Styles.SecondWalletCurrency}>
					<ArrowExchange />
					&nbsp;{secondWalletCurrency}
				</span>
			</div>
		);
	};

	return (
		<>
			{isLoading ? (
				<output className={Styles.loadingContainer}></output>
			) : userId ? (
				hasSecondWallet ? (
					<SwitchButton
						balance={balance}
						currency={currency}
						secondWalletCurrency={secondWalletCurrency}
					/>
				) : (
					<SoloBanlace balance={balance} currency={currency} />
				)
			) : (
				<span>0 USD</span>
			)}
		</>
	);
};

export default DisplayBalance;
