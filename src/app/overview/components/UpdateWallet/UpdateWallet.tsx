import Styles from "./UpdateWallet.module.scss";

import {
	Alert,
	Minus,
	NumberInput,
	Plus,
	SquareRoundedPlus,
} from "@/src/components";
import { AlertTimeOutContext } from "@/src/context";
import React, { ChangeEvent, useContext, useState } from "react";
import { usePostUserHistory } from "../../services";

const UpdateWallet: React.FC = (): JSX.Element => {
	const [amount, setAmount] = useState("");
	const { mutate } = usePostUserHistory();
	const { timeOut, setTimeOut } = useContext(AlertTimeOutContext);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value);
	};

	const handleClick = async (transfer_type: string) => {
		if (!amount) {
			setTimeOut(false);
		} else {
			mutate({ transfer_type, amount });
			setAmount("");
		}
	};

	return (
		<div className={Styles.UpdateWalletContainer}>
			<div className={Styles.UpdateWalletHead}>
				<div>
					<span>UPDATE WALLET</span>
				</div>
				<SquareRoundedPlus strokeWidth={2.5} />
			</div>

			<NumberInput
				label="MONEY:"
				allowNegative={false}
				value={amount.toString()}
				onChange={handleInputChange}
			/>

			{!timeOut && <Alert message={"NotAmountInserted"} />}

			<div className={Styles.ButtonContainer}>
				<button
					className={Styles.ButtonMinus}
					onClick={() => handleClick("spent")}
				>
					<Minus width={30} height={30} stroke={"#222531"} />
				</button>
				<button
					className={Styles.ButtonPlus}
					onClick={() => handleClick("income")}
				>
					<Plus width={30} height={30} stroke={"#222531"} />
				</button>
			</div>
		</div>
	);
};

export default UpdateWallet;
