"use client";
// Styles
import Styles from "./Overview.module.scss";
// Components
import {
	NewFile,
	SquareRoundedPlus,
	Plus,
	Minus,
	NumberInput,
	BalanceSection,
	UpdateWallet,
} from "@/src/Components";

const page = () => {
	return (
		<article className={Styles.ArticContainer}>
			<BalanceSection />

			<UpdateWallet />

			{/* <HistorySection /> */}
		</article>
	);
};

export default page;
