"use client"

import React, { memo } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"
import { ModelSelector } from "./model-picker"
import { ThinkingConfigComponent } from "./thinking-config"
import LanguageSelector from "./language-selector"
import { rpcClient } from "@/lib/rpc-client"
import ProviderManager from "./provider-manager"
import { useAtom, useAtomValue } from "jotai"
import { preferencesViewAtom } from "./atoms"

/**
 * PreferencesTab
 * A "Select with Autocomplete" using Popover + Command, now with contextWindow + maxTokens.
 */
const PreferencesTabNew: React.FC = () => {
	const { t } = useTranslation()
	// const { model: selectedModelId, handleModelChange } = useSettingsState()
	const forcedView = useAtomValue(preferencesViewAtom)
	const { data: { modelId: selectedModelId, providerId } = { modelId: null, providerId: null }, refetch } =
		rpcClient.currentModel.useQuery(
			{},
			{
				refetchInterval: 5000,
				refetchIntervalInBackground: true,
			}
		)
	const { mutate: handleModelChange } = rpcClient.selectModel.useMutation({
		onSuccess: () => {
			refetch()
		},
	})
	const [viewMode, setViewMode] = useAtom(preferencesViewAtom)
	const { data, status } = rpcClient.listModels.useQuery(
		{},
		{
			refetchInterval: 5000,
			refetchOnWindowFocus: true,
		}
	)

	if (!data) return null
	return (
		<div className="space-y-6">
			{/* Language Selector */}
			<LanguageSelector />
			
			{/* Model Configuration */}
			<Card className="max-w-md w-full mx-auto">
				<CardHeader>
					<CardTitle className="text-base sm:text-lg">{t("settings.preferences.mainArchitectureModel")}</CardTitle>
					<CardDescription className="text-sm">{t("settings.preferences.chooseDefaultModel")}</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					{/* Popover-based select with autocomplete */}
					{viewMode === "provider-manager" ? (
						<ProviderManager />
					) : (
						<>
							<ModelSelector
								models={data.models ?? []}
								modelId={selectedModelId ?? null}
								providerId={providerId ?? null}
								onChangeModel={handleModelChange}
								showDetails={true}
							/>
							<ThinkingConfigComponent modelId={selectedModelId ?? undefined} />
						</>
					)}
				</CardContent>

				<CardFooter className="text-xs text-muted-foreground flex flex-col items-start gap-0">
					<span>{t("settings.preferences.agentSpecificModels")}</span>
					<br />
					<span>
						{viewMode === "select-model"
							? t("settings.preferences.wantToUseCustomProvider")
							: t("settings.preferences.wantToSelectModels")}
						<button
							onClick={() => setViewMode(viewMode === "select-model" ? "provider-manager" : "select-model")}
							className="hover:underline text-primary transition-all">
							{t("settings.preferences.clickHere")}
						</button>
					</span>
				</CardFooter>
			</Card>
		</div>
	)
}

export default memo(PreferencesTabNew)
