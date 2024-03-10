"use client";
import Stepper from "@/components/shared/stepper";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { useViewerStore } from "@/store/useViewerStore";
import type { Page } from "@/types/wizard";
import { Orientation } from "@/types/wizard";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import NotFoundPage from "../not-found";
import ComponentBuilder from "./ComponentBuilder";

const styles = tv({
  base: "w-full h-content flex items-center pt-[6rem]",
  variants: {
    orientation: {
      [Orientation.horizontal]: "flex-col",
      [Orientation.vertical]: "flex-row",
      [Orientation.none]: "",
    },
  },
});

export default function Viewer({ params }: { params: { id: string } }) {
  const [currentStep, setStep] = useState(1);
  const [currentPage, setPage] = useState<Page | null>();

  const isPreviewViewer = false;
  const navigation = useRouter();
  const store = useViewerStore();

  const wizard = useAppStore((state) =>
    state.wizards.find((wizard) => wizard.id === params.id)
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const mountPage = useCallback(() => {
    if (wizard) {
      setPage(wizard.pages[currentStep - 1]);
    }
  }, [currentStep]);

  useEffect(() => {
    mountPage();
  }, [mountPage]);

  const handleBackward = () => {
    setStep((state) => state - 1);
  };

  const handleForward = () => {
    setStep((state) => state + 1);
  };

  if (!wizard) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles({ orientation: wizard?.orientation })}>
      {isPreviewViewer && (
        <Button
          className="fixed top-[5rem] left-6"
          onClick={() => navigation.back()}
        >
          Close Previwer
        </Button>
      )}
      <Stepper
        orientation={wizard.orientation}
        current={currentStep}
        totalSteps={wizard.pages.length}
        onBackward={handleBackward}
        onForward={handleForward}
      />
      <div className="lg:w-1/2 md:w-1/2 sm:w-full max-[650px]:w-full max-[650px]:p-8 sm:p-8">
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-8 mt-6">
          {currentPage?.title}
        </h1>

        <div className="w-full flex flex-col gap-4 mt-8">
          {currentPage?.components.map((component, index) => {
            return (
              <ComponentBuilder key={component.id} component={component} />
            );
          })}
        </div>
        <footer className="flex justify-center items-center py-4 sm:py-8 md:py-0 md:px-4 w-full gap-4 mt-10">
          {currentStep === wizard.pages.length && (
            <Button onClick={() => console.log(store.getForm())}>Finish</Button>
          )}
        </footer>
      </div>
    </div>
  );
}
