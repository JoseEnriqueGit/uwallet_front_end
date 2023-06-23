// Styles
import Styles from "./Sign-in.module.scss";
// Components
import { SignIn } from "@clerk/nextjs";

const Login = () => {
	return (
		<SignIn
			redirectUrl="/overview"
			signUpUrl="/sign-up"
			path="/sign-in"
			appearance={{
				elements: {
					// Container
					card: Styles.cardContainer,

					// Header
					header: Styles.header,
					headerTitle: Styles.headerTitle,
					headerSubtitle: Styles.headerSubtitle,

					// Form
					formFieldLabel: Styles.formFieldLabel,
					formFieldSuccessText: Styles.formFieldSuccessText,
					// Form Text
					formFieldErrorText: Styles.formFieldErrorText,

					// Divider
					dividerText: Styles.dividerText,
					dividerLine: Styles.dividerLine,

					// Buttons
					socialButtonsBlockButton: Styles.socialButtons,
					formButtonPrimary: Styles.formButtonPrimary,
					// Footer
					footer: Styles.footer,
					footerActionText: Styles.footerActionText,
					footerActionLink: Styles.footerActionLink,
				},
			}}
		/>
	);
};

export default Login;
