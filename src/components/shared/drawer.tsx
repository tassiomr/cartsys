import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useViewerStore } from "@/store/useViewerStore";
import { Page } from "@/types/wizard";
import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Title } from "../ui/text";

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
                {page.components
                  .filter((comp) => comp.type !== "button")
                  .map((component) => {
                    return (
                      <DrawerDescription key={component.id}>
                        <p className="text-xl text-foreground">
                          {component.props.label || component.props.placeholder}
                          :
                        </p>
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
