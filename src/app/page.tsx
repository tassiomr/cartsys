"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import constants from "@/configs/constants";
import { compareDate } from "@/lib/compare";
import { useAppStore } from "@/store/useAppStore";
import { Wizard } from "@/types/wizard";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const wizards = useAppStore((store) =>
    store.wizards.sort((a: Wizard, b: Wizard) =>
      compareDate(b.createdAt, a.createdAt)
    )
  );
  const navigation = useRouter();

  const handleOpenWizard = (id: string) => {
    navigation.push(`/viewer/${id}`);
  };

  return (
    <div className="w-full h-full pt-[6rem] px-12 pb-8">
      {wizards.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wizards.map((wizard, index) => (
            <Card
              data-testId={`wizard-${index}`}
              key={wizard.id}
              onClick={() => handleOpenWizard(wizard.id)}
              className="rounded-sm"
            >
              <CardHeader className="bg-primary rounded-tr-sm rounded-tl-sm" />
              <CardDescription className="p-4 flex flex-col gap-2">
                <Label>
                  {constants.wizardHome.card.orientationLabel}
                  {wizard.orientation}
                </Label>
                <Label>
                  {constants.wizardHome.card.pagesLabel}
                  {wizard.pages.length}
                </Label>
                {wizard.createdAt && (
                  <Label>
                    {constants.wizardHome.card.createdAtLabel}
                    {new Date(wizard?.createdAt).toLocaleDateString()}
                  </Label>
                )}
              </CardDescription>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="text-lg ">
            {constants.wizardHome.emptyPage.noWizardMessage}
          </p>
          <p className="mb-8 text-center">
            {constants.wizardHome.emptyPage.startCreatingMessage}
          </p>
          <Link href="/wizard-creator">
            <Button>{constants.wizardHome.buttons.createWizardButton}</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
