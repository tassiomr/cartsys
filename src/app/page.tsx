"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAppStore } from "@/store/useAppStore";
import type { Wizard } from "@/types/wizard";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const wizards = useAppStore((store) => store.wizards);
  const navigation = useRouter();

  const handleOpenWizard = (id: string) => {
    navigation.push(`/viewer/${id}`);
  };

  return (
    <div className="w-full h-full pt-[6rem] px-12 pb-8">
      {wizards.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wizards.map((wizard, index) => (
            <Card onClick={() => handleOpenWizard(wizard.id)}>
              <CardHeader className="bg-indigo-200 rounded-tr-sm rounded-tl-sm"></CardHeader>
              <CardDescription className="p-4 flex flex-col gap-2">
                <Label>Orientarion: {wizard.orientation}</Label>
                <Label>Pages: {wizard.pages.length}</Label>
                <Label>All Component List: Soon</Label>
              </CardDescription>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="text-lg ">
            Parece que você ainda não criou nenhum wizard!
          </p>
          <p className="mb-8 text-center">
            Que tal começar a criar seu primeiro wizard agora?
          </p>
          <Link href="/wizard-creator">
            <Button>Criar Wizard</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
