import ButtonGroup from "@/components/shared/button-group";
import constants from "@/config/constants";
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

    return constants.wizardCreator.actions.buttons.map((button) => {
      if (isPageEmpty && button.label === "preview") {
        return null;
      }
      return {
        label: button.label,
        click: actionFactory[button.action as keyof typeof actionFactory],
      };
    });
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
