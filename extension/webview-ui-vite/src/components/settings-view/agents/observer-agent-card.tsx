import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ModelSelector } from "../preferences/model-picker"
import { ChevronDown } from "lucide-react"
import { rpcClient } from "@/lib/rpc-client"
import { useSwitchToProviderManager } from "../preferences/atoms"
import { useTranslation } from "@/hooks/useTranslation"

export const ObserverAgentCard = () => {
	const { t } = useTranslation()
	const { data, refetch } = rpcClient.getObserverSettings.useQuery(
		{},
		{
			refetchInterval: 5000,
			refetchOnWindowFocus: true,
			refetchIntervalInBackground: true,
		}
	)
	const switchToProvider = useSwitchToProviderManager()

	const { mutate: customizeObserverPrompt, isPending: customizeObserverPromptPending } =
		rpcClient.customizeObserverPrompt.useMutation({})
	const { data: modelListData } = rpcClient.listModels.useQuery(
		{},
		{
			refetchInterval: 5000,
			refetchOnWindowFocus: true,
		}
	)

	const observerEnabled = !!data?.observerSettings
	const observerSettings = data?.observerSettings
	const {
		data: currentModelInfo,
		status: modelStatus,
		refetch: refetchModelData,
	} = rpcClient.currentObserverModel.useQuery(
		{},
		{
			refetchInterval: 5000,
			refetchOnMount: true,
			refetchOnWindowFocus: true,
		}
	)
	const { mutate: setObserverEnabled } = rpcClient.enableObserverAgent.useMutation({
		onSuccess: () => {
			refetch()
		},
	})

	const { mutate: updateSettings } = rpcClient.updateObserverAgent.useMutation({
		onSuccess: () => {
			refetch()
		},
	})

	const { mutate: selectModel } = rpcClient.selectObserverModel.useMutation({
		onSuccess: () => {
			refetch()
			refetchModelData()
		},
	})

	const handleFrequencyChange = (value: number) => {
		if (observerSettings) {
			updateSettings({
				observeEveryXRequests: value,
			})
		}
	}

	const handlePullMessagesChange = (value: number) => {
		if (observerSettings) {
			updateSettings({
				observePullMessages: value,
			})
		}
	}

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="text-sm">{t("settings.agents.observerAgent.title")}</CardTitle>
					<Switch
						checked={observerEnabled}
						onCheckedChange={(e) => setObserverEnabled({ enabled: e })}
						aria-label={t("settings.agents.observerAgent.toggleAriaLabel")}
					/>
				</div>
			</CardHeader>
			<CardContent className="space-y-4">
				<CardDescription className="text-xs">
					{t("settings.agents.observerAgent.description")}
				</CardDescription>
				{observerEnabled && observerSettings && (
					<div className="flex flex-col gap-4">
						<div className="space-y-2">
							<Label className="text-xs">{t("settings.agents.observerAgent.frequency.label")}</Label>
							<div className="text-xs text-muted-foreground mb-2">
								{t("settings.agents.observerAgent.frequency.description")}
							</div>
							<Slider
								value={[observerSettings.observeEveryXRequests]}
								onValueChange={(value) => handleFrequencyChange(value[0])}
								min={1}
								max={10}
								step={1}
								className="w-full"
							/>
							<div className="text-xs text-muted-foreground">
								{t("settings.agents.observerAgent.frequency.current", { count: observerSettings.observeEveryXRequests })}
							</div>
						</div>
						<div className="space-y-2">
							<Label className="text-xs">{t("settings.agents.observerAgent.messagesToAnalyze.label")}</Label>
							<div className="text-xs text-muted-foreground mb-2">
								{t("settings.agents.observerAgent.messagesToAnalyze.description")}
							</div>
							<Slider
								value={[observerSettings.observePullMessages]}
								onValueChange={(value) => handlePullMessagesChange(value[0])}
								min={1}
								max={20}
								step={1}
								className="w-full"
							/>
							<div className="text-xs text-muted-foreground">
								{t("settings.agents.observerAgent.messagesToAnalyze.current", { count: observerSettings.observePullMessages })}
							</div>
						</div>
						<div className="space-y-2">
							<Label className="text-xs">{t("settings.agents.observerAgent.selectModel.label")}</Label>
							<div className="text-xs text-muted-foreground mb-2">
								{t("settings.agents.observerAgent.selectModel.description")}
							</div>
							<ModelSelector
								models={modelListData?.models ?? []}
								modelId={observerSettings.modelId ?? null}
								providerId={observerSettings.providerId ?? null}
								onChangeModel={selectModel}
								showDetails={false}>
								<Button
									variant="ghost"
									className="text-xs flex items-center gap-1 h-6 px-2 hover:bg-accent">
									{modelListData?.models.find((m) => m.id === observerSettings.modelId)?.name ||
										t("settings.agents.observerAgent.selectModel.selectModelButton")}
									<ChevronDown className="w-4 h-4" />
								</Button>
							</ModelSelector>
							{data.observerSettings?.providerId &&
								data.observerSettings?.providerId !== "kodu" &&
								!currentModelInfo?.providerData.currentProvider && (
									<span
										onClick={() => {
											switchToProvider(data.observerSettings?.providerId!)
										}}
										className="text-destructive text-[11px] hover:underline cursor-pointer">
										{t("settings.agents.observerAgent.selectModel.setupProvider")}
									</span>
								)}
						</div>
						<div className="space-y-2 mb-4">
							<Label className="text-xs">{t("settings.agents.observerAgent.customPrompt.label")}</Label>
							<div className="text-xs text-muted-foreground mb-2">
								{t("settings.agents.observerAgent.customPrompt.description")}
							</div>
							<div className="flex flex-row gap-2 items-center flex-wrap">
								<Button
									disabled={customizeObserverPromptPending}
									onClick={() => {
										customizeObserverPrompt({})
									}}
									variant="default"
									size="sm"
									className="text-xs w-auto">
									{t("settings.agents.observerAgent.customPrompt.editButton")}
								</Button>
								{observerSettings.observePrompt && (
									<Button
										variant="destructive"
										className="text-xs w-auto"
										size="sm"
										onClick={() => updateSettings({ clearPrompt: true })}>
										{t("settings.agents.observerAgent.customPrompt.clearButton")}
									</Button>
								)}
							</div>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}
