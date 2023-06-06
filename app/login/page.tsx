// Styles
import Styles from "./Login.module.scss";
// Components
import { Input } from "../Components";
import Link from "next/link";

const Login = () => {
	return (
		<article className={Styles.ContainerLoginSingUp}>
			<span className={Styles.LogoTipo}>UWALLET</span>
			<Input
				label="Email:"
				type="email"
				id="email"
				// name='user_email'
				autoComplete="off"
				focus={false}
				// defaultValue={formData.correo}
				// onChange={e => setFormData({ ...formData, correo: e.target.value })}
			/>
			<Input
				label="Password:"
				type="password"
				id="password"
				// name='user_email'
				autoComplete="off"
				focus={false}
				// defaultValue={formData.correo}
				// onChange={e => setFormData({ ...formData, correo: e.target.value })}
			/>
			<button className={Styles.BtnLogin}>Login</button>
			<button className={Styles.BtnLoginWithGoogle}>Login with Google</button>
			<Link className={Styles.Link} href="/forgot-password">
				Forgot password?
			</Link>
			<Link className={Styles.Link} href="/signup">
				Create a account
			</Link>
		</article>
	);
};

export default Login;
