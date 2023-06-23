// Styles
import Styles from "./Sign-up.module.scss";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<>
			<SignUp
				redirectUrl="/overview"
				signInUrl="/sign-in"
				path="/sign-up"
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
						formFieldInputShowPasswordIcon:
							Styles.formFieldInputShowPasswordIcon,
						// Form Text
						formFieldSuccessText: Styles.formFieldSuccessText,
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
		</>
	);
}
