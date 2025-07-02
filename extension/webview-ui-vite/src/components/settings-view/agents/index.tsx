import React from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import _ from "lodash"
import { Badge } from "../../ui/badge"
import { ObserverAgentCard } from "./observer-agent-card"
import { useTranslation } from "@/hooks/useTranslation"

const AgentsTab: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle className="text-sm">{t("settings.agents.subTaskAgent.title")}</CardTitle>
						<Badge>{t("settings.agents.subTaskAgent.badge")}</Badge>
					</div>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-xs">
						{t("settings.agents.subTaskAgent.description")}
					</CardDescription>
				</CardContent>
			</Card>

			<ObserverAgentCard />

			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle className="text-sm">{t("settings.agents.coderAgent.title")}</CardTitle>
						<Badge>{t("settings.agents.coderAgent.badge")}</Badge>
					</div>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-xs">
						{t("settings.agents.coderAgent.description")}
					</CardDescription>
				</CardContent>
			</Card>

			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<div>
							<Button className="w-full" disabled>
								{t("settings.agents.createAgent.button")}
							</Button>
						</div>
					</TooltipTrigger>
					<TooltipContent side="top">
						<p className="text-xs">{t("settings.agents.createAgent.tooltip")}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}

export default AgentsTab
