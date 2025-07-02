import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "@/hooks/useTranslation"

const LanguageSelector: React.FC = () => {
	const { t, lang, changeLanguage } = useTranslation()

	const handleLanguageChange = (value: "en" | "zh") => {
		changeLanguage(value)
	}

	const languages = [
		{ value: "en", label: "English" },
		{ value: "zh", label: "简体中文" },
	]

	return (
		<Card className="max-w-md w-full mx-auto">
			<CardHeader>
				<CardTitle className="text-base sm:text-lg">{t("settings.language")}</CardTitle>
				<CardDescription className="text-sm">Choose your preferred language</CardDescription>
			</CardHeader>
			<CardContent>
				<Select value={lang} onValueChange={handleLanguageChange}>
					<SelectTrigger>
						<SelectValue placeholder={t("settings.selectTabPlaceholder")} />
					</SelectTrigger>
					<SelectContent>
						{languages.map((language) => (
							<SelectItem key={language.value} value={language.value}>
								{language.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</CardContent>
		</Card>
	)
}

export default LanguageSelector