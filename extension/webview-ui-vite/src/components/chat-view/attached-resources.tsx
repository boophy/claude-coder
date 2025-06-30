import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, File, Folder, Link, ChevronRight, Trash2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Resource } from "extension/shared/messages/client-message"
import { useTranslation } from "@/hooks/useTranslation"

type AttachedResourcesProps = {
	resources: Resource[]
	onRemove: (id: string) => void
	onRemoveAll: () => void
}

const AttachedResources: React.FC<AttachedResourcesProps> = ({ resources, onRemove, onRemoveAll }) => {
	const { t } = useTranslation()
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

	if (resources.length === 0) return null

	const getIcon = (type: Resource["type"]) => {
		switch (type) {
			case "file":
				return <File className="w-4 h-4 mr-2" />
			case "folder":
				return <Folder className="w-4 h-4 mr-2" />
			case "url":
				return <Link className="w-4 h-4 mr-2" />
		}
	}

	const ResourceItem = ({ resource, showFullName = false }: { resource: Resource; showFullName?: boolean }) => (
		<Tooltip>
			<TooltipTrigger>
				<div className="flex items-center bg-secondary text-secondary-foreground rounded-md px-2 py-1">
					{getIcon(resource.type)}
					<span className="text-sm mr-2">
						{showFullName
							? resource.name
							: resource.name.length > 5
							? resource.name.substring(0, 5) + "..."
							: resource.name}
					</span>
					<Button variant="ghost" size="sm" className="p-0 h-auto" onClick={() => onRemove(resource.id)}>
						<X className="w-4 h-4" />
					</Button>
				</div>
			</TooltipTrigger>
			<TooltipContent>{resource.name}</TooltipContent>
		</Tooltip>
	)

	const handleDeleteAll = () => {
		onRemoveAll()
		setShowDeleteConfirmation(false)
		setIsDialogOpen(false)
	}

	return (
		<>
			<div className="flex-1 flex flex-full mb-2">
				<div className="flex flex-wrap gap-2 items-center">
					{resources.slice(0, 2).map((resource) => (
						<ResourceItem key={resource.id} resource={resource} />
					))}
					{resources.length > 2 && (
						<Button
							variant="outline"
							size="sm"
							onClick={() => setIsDialogOpen(true)}
							className="flex items-center">
							<span className="mr-1">{t("attachedResources.seeAll", { count: resources.length })}</span>
							<ChevronRight className="w-4 h-4" />
						</Button>
					)}
				</div>
			</div>

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{t("attachedResources.dialogTitle")}</DialogTitle>
					</DialogHeader>
					<ScrollArea className="h-[300px] w-full pr-4">
						<div className="grid gap-4">
							{resources.map((resource) => (
								<ResourceItem key={resource.id} resource={resource} showFullName />
							))}
						</div>
					</ScrollArea>
					<DialogFooter>
						<Button
							variant="destructive"
							onClick={() => setShowDeleteConfirmation(true)}
							className="w-full sm:w-auto">
							<Trash2 className="w-4 h-4 mr-2" />
							{t("attachedResources.deleteAll")}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Dialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{t("attachedResources.confirmDeletion.title")}</DialogTitle>
					</DialogHeader>
					<Alert variant="destructive">
						<AlertTitle>{t("attachedResources.confirmDeletion.warningTitle")}</AlertTitle>
						<AlertDescription>
							{t("attachedResources.confirmDeletion.warningDescription")}
						</AlertDescription>
					</Alert>
					<DialogFooter>
						<Button variant="outline" onClick={() => setShowDeleteConfirmation(false)}>
							{t("attachedResources.confirmDeletion.cancel")}
						</Button>
						<Button variant="destructive" onClick={handleDeleteAll}>
							{t("attachedResources.deleteAll")}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default AttachedResources
