"use client";
import { useAppStore } from "@/store/useAppStore";
import { createWizard } from "@/store/useCreateWizard";
import { Component, ComponentsType } from "@/types/components";
import { Orientation, Page, Wizard } from "@/types/wizard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import Actions from "./components/Actions";
import FormBuilder from "./components/FormBuilder";
import PageBuilder from "./components/PageBuilder";
import Title from "./components/Title";
import cuid from "cuid";

const mainStyle = tv({
  base: "w-full flex flex-col items-center p-6",
});

export default function HomePage() {
  const {
    id,
    pages,
    orientation,
    updatePages,
    addPage,
    addComponent,
    reset,
    setOrientation,
  } = createWizard();

  const navigation = useRouter();
  const appStore = useAppStore();

  const [formStatus, setFormStatus] = useState<{
    isOpen: boolean;
    componentType: ComponentsType;
    pageId: string;
  }>({ isOpen: false, pageId: "", componentType: ComponentsType.input });

  useEffect(() => {
    if (!id) {
      createWizard.setState({ id: cuid() });
    }
  }, [id]);

  const onSave = () => {
    const { id, pages, orientation, createdAt } = createWizard.getState();
    appStore.createWizard({
      id,
      pages,
      orientation,
      createdAt,
    });

    navigation.replace(`/viewer/${id}`);
    reset();
  };

  const handleGoToPreviewPage = () => {
    navigation.push("/viewer");
  };

  const cancelAction = () => {
    navigation.replace("/");
    reset();
  };

  const handleUpdatePage = (page: Page) => {
    const newPages = pages.map((oldPage: Page) => {
      if (page.id === oldPage.id) {
        return page;
      }

      return oldPage;
    });

    updatePages(newPages);
  };

  const handleAddComponents = (component: Component, pageId: string) => {
    addComponent(component, pageId);
    setFormStatus((state) => ({ ...state, pageId: "", isOpen: false }));
  };

  const openAddComponentModal = (
    componentType: ComponentsType,
    pageId: string
  ) => {
    setFormStatus({ componentType, pageId, isOpen: true });
  };

  console.log(pages);

  return (
    <div className="w-full flex h-auto pt-[4rem]">
      <div className={mainStyle()}>
        <div className="flex gap-8">
          <Title orientation={orientation} setOrientation={setOrientation} />

          <Actions
            isVisible={orientation !== Orientation.none}
            addPage={addPage}
            goToPreview={handleGoToPreviewPage}
            cancelAction={cancelAction}
            isPageEmpty={pages.length === 0}
            saveAction={onSave}
          />
        </div>
        {pages.map((page: Page) => (
          <PageBuilder
            setPageName={handleUpdatePage}
            addComponent={openAddComponentModal}
            key={page.id}
            page={page}
          />
        ))}

        {formStatus.componentType && (
          <FormBuilder formStatus={formStatus} onSave={handleAddComponents} />
        )}
      </div>
    </div>
  );
}
