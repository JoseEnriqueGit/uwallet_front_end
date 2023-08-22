// Styles
import Styles from "./DisplayBalance.module.scss";

import { ArrowExchange } from "@/src/components";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useQueryClient } from "react-query";
import { BalanceDataProps, BalanceDataEmptyState } from "../../../models";
import { getBalance } from "../../../services";

const DisplayBalance: React.FC = (): JSX.Element => {
	const { userId } = useAuth();
	const queryClient = useQueryClient();
	const { data, isLoading } = getBalance(userId!);

	const { balance, currency, hasSecondWallet, secondWalletCurrency } =
		data || BalanceDataEmptyState;

	const handleSwitchWallet = async () => {
		try {
			await axios.patch(`/v1/users/${userId}/switchWallet`);
			queryClient.invalidateQueries(["balance", userId]);
		} catch (error: any) {
			console.error(error);
		}
	};

	const SoloBanlace = ({
		balance,
		currency,
	}: BalanceDataProps): JSX.Element => {
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
	}: BalanceDataProps): JSX.Element => {
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
