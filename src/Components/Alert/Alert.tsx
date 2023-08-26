import Styles from "./Alert.module.scss";

import React, { useEffect, useContext } from "react";
import { AlertTimeOutContext } from "@/src/context";

interface IAlertProps {
	message: string;
}

enum AlertType {
	NotAmountInserted = "NotAmountInserted",
	InsufficientFunds = "InsufficientFunds",
}

// Render alert messages
const renderAlert = new Map();
renderAlert.set(AlertType.NotAmountInserted, "Please enter a value.");
renderAlert.set(AlertType.InsufficientFunds, "Insufficient funds.");

const Alert = ({ message }: IAlertProps): JSX.Element => {
	const { timeOut, setTimeOut } = useContext(AlertTimeOutContext);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!timeOut) {
				setTimeOut(true);
			}
		}, 4000);

		return () => clearTimeout(timer);
	}, [timeOut]);

	const multiConditionalInit = (itemToGet: string) => {
		return renderAlert.has(itemToGet) ? (
			renderAlert.get(itemToGet)
		) : (
			<div>Something went wrong...</div>
		);
	};

	return (
		<>
			{timeOut ? null : (
				<span className={Styles.Warning}>{multiConditionalInit(message)}</span>
			)}
		</>
	);
};

export default Alert;
