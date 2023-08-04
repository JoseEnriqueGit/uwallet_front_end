"use client";

import { createContext, useState, ReactNode } from "react";

type View = "General" | "UserWallets" | "NewWallet";

type ViewContextValue = {
	currentView: View;
	setCurrentView: (view: View) => void;
};

// Create a ViewContext with a default value
export const ViewContext = createContext<ViewContextValue>({
	currentView: "General",
	setCurrentView: (view: View) => {
		console.warn(`No ViewProvider available for setting view to ${view}`);
	},
});

// Define a ViewProvider component that manages the currentView state
export const ViewProvider: React.FC<{ children: ReactNode }> = ({
	children,
}): JSX.Element => {
	const [currentView, setCurrentView] = useState<View>("General");

	return (
		<ViewContext.Provider value={{ currentView, setCurrentView }}>
			{children}
		</ViewContext.Provider>
	);
};
