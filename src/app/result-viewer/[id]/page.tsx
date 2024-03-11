"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAppStore } from "@/store/useAppStore";

export default function Page({ params }: { params: { id: string } }) {
  const wizard = useAppStore(({ wizards }) =>
    wizards.find((wizard) => wizard.id === params.id)
  );

  if (!wizard) {
    return;
  }

  console.log(wizard);

  return (
    <div className="w-1/2 px-8 pt-[6rem]">
      <div>
        <p>Wizard Result</p>
        {wizard.pages.map((page) => (
          <Card key={page.id}>
            <CardHeader>
              <CardTitle className="uppercase">{page.title}</CardTitle>
            </CardHeader>
            <Separator className="px-8" />
            <CardContent>
              {page.components.map((component) => {
                return (
                  <div>
                    <Label>{component.type}</Label>
                    <CardDescription>
                      {Object.keys(component.props).map((props) => (
                        <p>
                          {props}:{component.props[props]}
                        </p>
                      ))}
                    </CardDescription>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
