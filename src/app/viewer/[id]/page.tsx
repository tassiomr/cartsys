"use client";
import ComponentBuilder from "@/components/shared/component-builder";
import Stepper from "@/components/shared/stepper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useAppStore } from "@/store/useAppStore";
import { useViewerStore } from "@/store/useViewerStore";
import type { Page } from "@/types/wizard";
import { Orientation } from "@/types/wizard";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import NotFoundPage from "../not-found";
import constants from "@/config/constants";

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

export default function ViewerPage({ params }: { params: { id: string } }) {
  const [currentStep, setStep] = useState(1);
  const [currentPage, setPage] = useState<Page | null>();
  const { toast, dismiss } = useToast();
  const query = useSearchParams();

  const orientation = query.get("orientation") as Orientation;
  const pages = JSON.parse(query.get("pages") || "{}") as Page[];
  const isPreviewViewer = Boolean(query.get("isPreviewViewer"));

  const navigation = useRouter();

  const appWizard = useAppStore((state) =>
    state.wizards.find((wizard) => wizard.id === params.id)
  );

  const wizard = isPreviewViewer
    ? { pages, orientation, isPreviewViewer }
    : appWizard;

  const mountPage = useCallback(() => {
    if (wizard) {
      setPage(null);
      setPage({ ...wizard.pages[currentStep - 1] });
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

  const handleShowResults = () => {
    toast({
      title: constants.viewer.toast.title,
      description: constants.viewer.toast.description,
      action: (
        <Button
          onClick={() => {
            navigation.replace("/");
            dismiss();
          }}
        >
          Go Home
        </Button>
      ),
    });
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
          {constants.viewer.buttons.closePreview}
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
        <Card className="rounded-sm">
          <CardHeader>
            <CardTitle>{currentPage?.title}</CardTitle>
          </CardHeader>
          <Separator />
          <CardDescription className="px-8 py-8 flex flex-col gap-8">
            {currentPage?.components.map((component) => {
              return (
                <ComponentBuilder key={component.id} component={component} />
              );
            })}
          </CardDescription>
        </Card>

        <footer className="flex justify-center items-center py-4 sm:py-8 md:py-0 md:px-4 w-full gap-4 mt-10">
          {currentStep === wizard.pages.length && (
            <Button size={"md"} onClick={handleShowResults}>
              {constants.viewer.buttons.finish}
            </Button>
          )}
        </footer>
      </div>
    </div>
  );
}
