import { ApiBalanceData, BalanceData } from "../models";

export const BalanceDataAdapter = (balanceData: ApiBalanceData): BalanceData => {
  return {
    balance: balanceData.balance,
    currency: balanceData.currency,
    hasSecondWallet: balanceData.hasSecondWallet,
    secondWalletCurrency: balanceData.secondWalletCurrency,
  };
};