import React, { useEffect, useMemo, useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Atom, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { V1ClaudeMessage } from "extension/shared/messages/extension-message"
import { TextMessage } from "./chat-row-utils"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { cn } from "@/lib/utils"
import MarkdownRenderer from "./markdown-renderer"
import { useTranslation } from "@/hooks/useTranslation"

interface ReasoningRowProps {
	message: V1ClaudeMessage
}

const ThreeDotsLoading = () => {
	return (
		<div className="flex justify-center items-center gap-1">
			<div className="size-1 bg-muted rounded-full animate-pulse"></div>
			<div className="size-1 bg-muted rounded-full animate-pulse"></div>
			<div className="size-1 bg-muted rounded-full animate-pulse"></div>
		</div>
	)
}

export const ReasoningRow: React.FC<ReasoningRowProps> = ({ message }) => {
	const { t } = useTranslation()
	const [open, setOpen] = useState(false)
	const [manuallyCollapsed, setManuallyCollapsed] = useState(false)
	const isFetching = useMemo(
		() => message.reasoning && message.isFetching && !message.reasoning?.finishedAt,
		[message.isFetching, message.reasoning]
	)

	const formatThoughtDuration = (startTimestamp: number, endTimestamp?: number): string => {
		if (!endTimestamp) {
			return t("reasoning.thoughtShort")
		}
		const differenceMs = Math.abs(endTimestamp - startTimestamp)
		const seconds = differenceMs / 1000

		if (differenceMs < 1000) {
			return t("reasoning.thoughtLessThanASecond")
		}

		const fullSeconds = Math.floor(seconds)
		return t("reasoning.thoughtSeconds", { count: fullSeconds })
	}

	useEffect(() => {
		if (isFetching && !manuallyCollapsed) {
			// auto open when fetching
			setOpen(true)
		}
	}, [isFetching])

	if (!message.reasoning) {
		return null
	}

	return (
		<div className="mb-2 my-2">
			<Collapsible defaultOpen={false} open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
				<div className="flex items-center gap-2 mb-2">
					<CollapsibleTrigger asChild>
						<Button
							onClick={() => setManuallyCollapsed(manuallyCollapsed)}
							variant="ghost"
							size="sm"
							className="gap-1">
							<Atom className={cn("size-4", { "animate-spin": isFetching })} />

							<span className="text-xs font-medium mr-2">
								{!message.isError &&
									(isFetching
										? t("reasoning.thinking")
										: formatThoughtDuration(
												message.reasoning?.startedAt,
												message.reasoning?.finishedAt
										  ))}
								{message.isError &&
									(message.reasoning.finishedAt
										? formatThoughtDuration(
												message.reasoning?.startedAt,
												message.reasoning?.finishedAt
										  )
										: t("reasoning.thinkingInterrupted"))}
							</span>
							<ChevronDown
								className="size-4 transition-transform duration-200"
								style={{
									transform: open ? "rotate(-90deg)" : "rotate(0deg)",
								}}
							/>
						</Button>
					</CollapsibleTrigger>
				</div>

				<CollapsibleContent>
					<div className="bg-muted rounded-sm p-1">
						<ScrollArea
							viewProps={{
								style: {
									maxHeight: 240,
								},
							}}>
							<ScrollBar forceMount orientation="vertical" />
							<ScrollBar orientation="horizontal" forceMount />
							<div className="flex text-wrap flex-wrap gap-2">
								<MarkdownRenderer markdown={message.reasoning.content || ""} />
							</div>{" "}
						</ScrollArea>
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	)
}
