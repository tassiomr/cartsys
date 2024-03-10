import ButtonGroup from "@/components/shared/button-group";
import { useCallback, useEffect, useState } from "react";

type ActionsProp = {
	isVisible: boolean;
	isPageEmpty: boolean;
	addPage: () => void;
	goToPreview: () => void;
	cancelAction: () => void;
	saveAction: () => void;
};

type ActionButton = {
	label: string;
	click: () => void;
};

export default function Actions({
	isVisible,
	isPageEmpty,
	addPage,
	goToPreview,
	cancelAction,
	saveAction,
}: ActionsProp) {
	const [buttons, setButtons] = useState<ActionButton[]>([]);

	const mountButton = useCallback(() => {
		const buttons = [
			{
				label: "Adicionar Página",
				click: addPage,
			},
			{
				label: "Cancelar",
				click: cancelAction,
			},
			{
				label: "Salvar",
				click: saveAction,
			},
		];

		if (!isPageEmpty) {
			buttons.push({ label: "Preview", click: goToPreview });
		}

		return buttons;
	}, [addPage, cancelAction, goToPreview]);

	useEffect(() => {
		const buttons = mountButton();
		setButtons(buttons as ActionButton[]);
	}, [isPageEmpty]);

	if (!isVisible) {
		return;
	}

	return <ButtonGroup buttons={buttons} />;
}
