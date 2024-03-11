"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

export default function BottomSheet({
	open,
	children,
	footer,
	title,
	description,
	onOpenChange,
}: {
	open: boolean;
	children: React.ReactNode;
	footer: React.ReactNode;
	title?: string;
	description?: string;
	onOpenChange: () => void;
}) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange} key={"bottom"}>
			<SheetContent side="bottom">
				<SheetHeader>
					<SheetTitle>{title}</SheetTitle>
					{description && <SheetDescription>{description}</SheetDescription>}
				</SheetHeader>

				{children}
				<SheetFooter className="mt-6">
					<SheetClose asChild>{footer}</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
