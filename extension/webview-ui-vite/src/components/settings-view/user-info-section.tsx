import React from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useTranslation"
import { useExtensionState } from "../../context/extension-state-context"
import { vscode } from "@/utils/vscode"
import { formatPrice } from "./utils"
import { getKoduAddCreditsUrl, getKoduOfferUrl, getKoduSignInUrl } from "extension/shared/kodu"
import { GiftIcon, KeyIcon } from "lucide-react"

const UserInfoSection: React.FC = () => {
	const { t } = useTranslation()
	const extensionState = useExtensionState()
	const [isClicked, setIsClicked] = React.useState(false)

	if (extensionState.user === undefined) {
		return (
			<div className="flex flex-col gap-2 min-w-[90vw]">
				<Button
					className="w-fit"
					onClick={() => {
						setIsClicked(true)
						vscode.postTrackingEvent("AuthStart")
					}}
					asChild>
					<a href={getKoduSignInUrl(extensionState.uriScheme, extensionState.extensionName)}>
						{t("settings.userInfo.signIn")}
					</a>
				</Button>
				{isClicked && (
					<Button
						className="w-fit"
						onClick={() => {
							vscode.postMessage({ type: "setApiKeyDialog" })
						}}
						variant={"link"}>
						{t("settings.userInfo.haveApiKey")}
					</Button>
				)}
			</div>
		)
	}

	return (
		<>
			<div className="flex max-[280px]:items-start max-[280px]:flex-col max-[280px]:space-y-2 flex-row justify-between items-center">
				<div>
					<p className="text-xs font-medium">{t("settings.userInfo.signedInAs")}</p>
					<p className="text-sm font-bold">{extensionState.user?.email}</p>
					<Button
						variant="link"
						size="sm"
						className="text-sm !text-muted-foreground"
						onClick={() => vscode.postMessage({ type: "didClickKoduSignOut" })}>
						{t("settings.userInfo.signOut")}
					</Button>
				</div>
				<div className="max-[280px]:mt-2">
					<p className="text-xs font-medium">{t("settings.userInfo.creditsRemaining")}</p>
					<p className="text-lg font-bold">{formatPrice(extensionState.user?.credits || 0)}</p>
				</div>
			</div>
			<div className="flex gap-2 flex-wrap">
				<Button
					onClick={() => {
						vscode.postTrackingEvent("ExtensionCreditAddOpen")
						vscode.postTrackingEvent("ExtensionCreditAddSelect", "purchase")
					}}
					asChild>
					<a href={getKoduAddCreditsUrl(extensionState.uriScheme)}>{t("settings.userInfo.addCredits")}</a>
				</Button>
				<Button
					onClick={() => {
						vscode.postTrackingEvent("OfferwallView")
						vscode.postTrackingEvent("ExtensionCreditAddSelect", "offerwall")
					}}
					variant={"outline"}
					asChild>
					<a href={getKoduOfferUrl(extensionState.uriScheme)}>
						<GiftIcon className="size-4 mr-1" />
						{t("settings.userInfo.freeCredits")}
					</a>
				</Button>
			</div>
		</>
	)
}

export default UserInfoSection
