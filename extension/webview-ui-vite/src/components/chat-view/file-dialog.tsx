import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import EnhancedFileTree, { FileNode } from "./file-tree"
import { useTranslation } from "@/hooks/useTranslation"

type FileDialogProps = {
	open: boolean
	onClose: () => void
	fileTree: FileNode[]
	selectedItems: Set<string>
	setSelectedItems: (items: Set<string>) => void
	onSubmit: () => void
}

const FileDialog: React.FC<FileDialogProps> = ({
	open,
	onClose,
	fileTree,
	selectedItems,
	setSelectedItems,
	onSubmit,
}) => {
	const { t } = useTranslation()
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="max-w-[600px] w-[90vw] bg-background text-foreground px-4">
				<DialogHeader>
					<DialogTitle>{t("fileDialog.title")}</DialogTitle>
					<DialogDescription>{t("fileDialog.description")}</DialogDescription>
				</DialogHeader>
				<div className="py-4">
					<EnhancedFileTree
						initialFiles={fileTree}
						onItemSelect={(items) => setSelectedItems(items)}
						value={selectedItems}
					/>
				</div>
				<Button onClick={onSubmit}>{t("fileDialog.addSelectedItems")}</Button>
			</DialogContent>
		</Dialog>
	)
}

export default FileDialog
