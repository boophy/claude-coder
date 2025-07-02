import { useTranslation } from "@/hooks/useTranslation"
import { Badge } from "../ui/badge"
import { ExperimentalFeature } from "./types"

export const useExperimentalFeatures = (): ExperimentalFeature[] => {
	const { t } = useTranslation()

	return [
		{
			id: "alwaysAllowWriteOnly",
			label: t("settings.experimental.features.alwaysAllowWriteOnly.label"),
			description: t("settings.experimental.features.alwaysAllowWriteOnly.description"),
		},
		// {
		// 	id: "isAdvanceThinkingEnabled",
		// 	label: "Advance Thinking",
		// 	description: "Claude will generate more reasoning tokens before answering",
		// },
		{
			id: "autoSummarize",
			label: t("settings.experimental.features.autoSummarize.label"),
			description: t("settings.experimental.features.autoSummarize.description"),
			disabled: false,
			comingSoon: false,
		},
		{
			id: "taskHistory",
			label: t("settings.experimental.features.taskHistory.label"),
			description: t("settings.experimental.features.taskHistory.description"),
			disabled: true,
			comingSoon: true,
		},
	]
}
