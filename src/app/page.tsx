// Css
import Styles from "./page.module.scss";
// Components
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Home = async () => {
	const isLogged = await currentUser();

	isLogged ? redirect("/overview") : redirect("/sign-in");
	redirect("/overview");
};

export default Home;
