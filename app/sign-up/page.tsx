// Styles
import Styles from "./Sign-up.module.scss";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<>
			<SignUp
				appearance={{
					elements: {
						// Header
						card: Styles.ContainerLoginSingUp,
						headerTitle: Styles.headerTitle,
						headerSubtitle: Styles.headerSubtitle,

						// Form
						formFieldLabel: Styles.formFieldLabel,
						formFieldSuccessText: Styles.formFieldSuccessText,

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
