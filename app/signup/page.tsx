// Styles
import Styles from "./Sign-up.module.scss";
// Components
import { Input } from "../Components";
import Link from "next/link";
const SingUp = () => {
	return (
		<form className={Styles.ContainerLoginSingUp}>
			<span className={Styles.LogoTipo}>UWALLET</span>
			<Input
				label="Email:"
				type="email"
				id="email"
				// name='user_email'
				autoComplete="on"
				focus={true}
				// defaultValue={userData.email}
				// onChange={e => setUserData({ ...userData, email: e.target.value })}
			/>
			<Input
				label="Password:"
				type="password"
				id="password"
				// name='user_pass'
				autoComplete="on"
				focus={false}
				// defaultValue={userData.password}
				// onChange={e => setUserData({ ...userData, passwordHash: e.target.value })}
			/>
			{/* <button className="BtnSingUp">
      {isLoading ? (
        <RaceBy size={80} lineWeight={5} speed={1.4} color="#87FF7C" />
      ) : (
        "Sing Up"
      )}
    </button> */}
			<button className={Styles.BtnSignUp}>Sing up</button>
			<button className={Styles.BtnSignUpWithGoogle}>
				Sing up with Google
			</button>
			<Link className={Styles.Link} href="/login">
				Do you have a account?
			</Link>
		</form>
	);
};

export default SingUp;
