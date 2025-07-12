import { VSCodeButton } from "@vscode/webview-ui-toolkit/react"
import React from "react"
import { useExtensionState } from "../../context/extension-state-context"
import { vscode } from "../../utils/vscode"
import TaskCard from "./task-card"
import { useTranslation } from "@/hooks/useTranslation"

interface HistoryPreviewProps {
	showHistoryView: () => void
}

const HistoryPreview: React.FC<HistoryPreviewProps> = ({ showHistoryView }) => {
	const { taskHistory } = useExtensionState()
	const { t } = useTranslation()
	const handleHistorySelect = (id: string) => {
		vscode.postMessage({ type: "showTaskWithId", text: id })
	}

	return (
		<section className="border-b-0">
			<h3 className="flex-line uppercase text-alt">
				<span className="codicon codicon-history text-alt" />
				{t("chat.recent")}
			</h3>

			{taskHistory
				.filter((item) => item.ts && item.task)
				.slice(0, 4)
				.map((item) => (
					<TaskCard
						key={item.id}
						id={item.id}
						task={item.name ?? item.task}
						ts={item.ts}
						tokensIn={item.tokensIn}
						tokensOut={item.tokensOut}
						cacheWrites={item.cacheWrites}
						cacheReads={item.cacheReads}
						totalCost={item.totalCost}
						isCompleted={item.isCompleted}
						onSelect={handleHistorySelect}
					/>
				))}
			<VSCodeButton appearance="icon" onClick={showHistoryView}>
				<div className="text-light">{t("chat.allHistory")}</div>
			</VSCodeButton>
		</section>
	)
}

export default HistoryPreview
