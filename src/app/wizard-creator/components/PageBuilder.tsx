"use client";
import ComponentBuilder from "@/components/shared/component-builder";
import ContextMenu from "@/components/shared/navbar-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentsType } from "@/types/components";
import { Page } from "@/types/wizard";
import PageName from "./PageName";
import constants from "@/configs/constants";

export default function PageBuilder({
  page,
  setPageName,
  addComponent,
}: {
  page: Page;
  setPageName: (page: Page) => void;
  addComponent: (component: ComponentsType, pageId: string) => void;
}) {
  const components = Object.values(ComponentsType).map((label) => ({
    click: () => addComponent(label, page.id),
    title: label,
  }));

  return (
    <Card className="lg:w-1/2 mt-8 sm:w-full  h-auto">
      <CardHeader>
        <CardTitle>
          <PageName page={page} setPageName={setPageName} />
          <ContextMenu
            className="p-4"
            title={constants.wizardCreator.pageBuilder.buttons.addComponent}
            components={components}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="px-8 pb-2 flex flex-col gap-6">
          {page.components.map((component) => {
            return <ComponentBuilder component={component} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
}
