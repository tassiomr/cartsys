import ButtonGroup from "@/components/shared/button-group";
import constants from "@/configs/constants";
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
    const actionFactory = {
      add: addPage,
      save: saveAction,
      cancel: cancelAction,
      preview: goToPreview,
    };
    const buttons = [];

    for (const button of constants.wizardCreator.actions.buttons) {
      if (button.action === "preview" && isPageEmpty) {
      } else {
        buttons.push({
          label: button.label,
          click: actionFactory[button.action as keyof typeof actionFactory],
        });
      }
    }

    return buttons;
  }, [isPageEmpty]);

  useEffect(() => {
    const buttons = mountButton();
    setButtons(buttons as ActionButton[]);
  }, [isPageEmpty]);

  if (!isVisible) {
    return;
  }

  return <ButtonGroup buttons={buttons} />;
}
