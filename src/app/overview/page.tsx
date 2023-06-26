"use client";
// Styles
import { use, useState } from "react";
import Styles from "./Overview.module.scss";
// Components
import {
	Coins,
	NewFile,
	SquareRoundedPlus,
	Plus,
	Minus,
	Input,
} from "@/src/Components";

const page = () => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value.replace(/[^0-9]/g, "");
		if (newValue.length <= 10) {
			setInputValue(newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		}
	};

	const handleButtonClick = () => {
		console.log(inputValue);
	};

	return (
		<article className={Styles.ArticContainer}>
			<div className={Styles.OverviewHead}>
				<span className={Styles.BalanceSpan}>Balance total</span>
				<div className={Styles.TotalOutput}>
					<Coins strokeWidth={2.5} />
					<span>1800 Pesos</span>
				</div>
			</div>

			<div className={Styles.UpdateWalletContainer}>
				<div className={Styles.UpdateWalletHead}>
					<div>
						<NewFile strokeWidth={2.5} />
						<span>UPDATE WALLET</span>
					</div>
					<SquareRoundedPlus strokeWidth={2.5} />
				</div>
				<Input
					label="MONEY:"
					type="text"
					onChange={handleChange}
					value={inputValue}
				/>

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
