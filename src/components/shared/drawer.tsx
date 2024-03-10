import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Page } from "@/types/wizard";
import React from "react";
import { Title } from "../ui/text";
import { useViewerStore } from "@/store/useViewerStore";
import { Label } from "../ui/label";

export default function DrawerComponent({
  pages,
  open,
  dispose,
}: {
  open: boolean;
  dispose: () => void;
  pages: Page[];
}) {
  const getState = useViewerStore?.getState;
  return (
    <Drawer open={open} onClose={dispose} onDrag={dispose}>
      <DrawerContent className="h-3/4 flex flex-col items-center">
        <DrawerHeader className="flex flex-col gap-3">
          {pages.map((page) => {
            return (
              <div key={page.id}>
                <DrawerTitle className="text-2xl">{page.title}</DrawerTitle>
                {page.components.map((component) => {
                  return (
                    <DrawerDescription>
                      {getState && (
                        <Title text={getState()[component.id]?.label} />
                      )}
                      {getState && (
                        <Label>{getState()[component.id]?.value}</Label>
                      )}
                    </DrawerDescription>
                  );
                })}
              </div>
            );
          })}
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button onClick={dispose} variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
