export interface ApiBalanceData {
	balance: number;
	currency: string;
	hasSecondWallet: boolean;
	secondWalletCurrency: string;
}

export interface BalanceData {
	balance: number;
	currency: string;
	hasSecondWallet: boolean;
	secondWalletCurrency: string;
}

export interface BalanceDataProps {
	balance: number;
	currency: string;
	hasSecondWallet?: boolean;
	secondWalletCurrency?: string;
}


export const BalanceDataEmptyState: ApiBalanceData = {
	balance: 0,
	currency: "",
	hasSecondWallet: false,
	secondWalletCurrency: "",
};
