"use client";

import { createContext, useState, ReactNode } from "react";

type TimeOutContext = {
	timeOut: boolean;
	setTimeOut: (timeOut: boolean) => void;
};

// Create a ViewContext with a default value
export const AlertTimeOutContext = createContext<TimeOutContext>({
	timeOut: true,
	setTimeOut: () => true,
});

// Define a ViewProvider component that manages the currentView state
export const TimeOutProvider: React.FC<{ children: ReactNode }> = ({
	children,
}): JSX.Element => {
	const [timeOut, setTimeOut] = useState(true);

	return (
		<AlertTimeOutContext.Provider value={{ timeOut, setTimeOut }}>
			{children}
		</AlertTimeOutContext.Provider>
	);
};
