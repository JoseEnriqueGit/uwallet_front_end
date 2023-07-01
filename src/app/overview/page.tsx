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
} from "@/src/Components";

const page = () => {
	return (
		<article className={Styles.ArticContainer}>
			<BalanceSection balance={1800} userId="user_prueba" />

			<div className={Styles.UpdateWalletContainer}>
				<div className={Styles.UpdateWalletHead}>
					<div>
						<NewFile strokeWidth={2.5} />
						<span>UPDATE WALLET</span>
					</div>
					<SquareRoundedPlus strokeWidth={2.5} />
				</div>

				<NumberInput label="MONEY:" allowNegative={false}/>

				<div className={Styles.ButtonContainer}>
					<button className={Styles.ButtonMinus}>
						<Minus width={30} height={30} stroke={"#222531"} />
					</button>
					<button className={Styles.ButtonPlus}>
						<Plus width={30} height={30} stroke={"#222531"} />
					</button>
				</div>
			</div>

			{/* <HistorySection /> */}
		</article>
	);
};

export default page;
