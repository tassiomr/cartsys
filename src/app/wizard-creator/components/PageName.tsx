import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Page } from "@/types/wizard";
import { useState } from "react";

export default function PageName({
  page,
  setPageName,
}: {
  page?: Page;
  setPageName: (page: Page) => void;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(true);

  if (page) {
    return (
      <div className="w-full rounded-sm capitalize p-4">
        {isEdit ? (
          <div className="flex gap-2" title="double click to edit">
            <Input
              className="text-xl"
              placeholder="Nome da página"
              value={page.title}
              onChange={(e) => setPageName({ ...page, title: e.target.value })}
            />
            <Button onClick={() => setIsEdit(false)}>Salvar nome</Button>
          </div>
        ) : (
          <div
            className="w-full flex gap-2 items-center"
            onDoubleClick={() => setIsEdit(true)}
          >
            <h1 className="text-xl">{page.title}</h1>
          </div>
        )}
      </div>
    );
  }
}
