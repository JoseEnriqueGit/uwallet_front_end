// Components
import { Input } from '../Components'
import Link from 'next/link'

const Login = () => {
  return (
    <article className="ContainerLoginSingUp">
			<span className="Logo">UWALLET</span>
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
			<button className="BtnLogin">Login</button>
			<button className="BtnLoginWithGoogle">Login with Google</button>
			<Link className="Link" href="forgot-password/">
				Forgot password?
			</Link>
			<Link className="Link" href="/sing-up">
				Create a account
			</Link>
		</article>
  )
}

export default Login