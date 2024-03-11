import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Orientation } from "@/types/wizard";

type TitleProps = {
  orientation: Orientation;
  setOrientation: (value: Orientation) => void;
};

export default function Title({ orientation, setOrientation }: TitleProps) {
  const orientationButtons = [Orientation.horizontal, Orientation.vertical];

  if (orientation === Orientation.none) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vamos começar</CardTitle>
          <CardDescription>
            Primeiramente escolha a direção do layout do seu Wizard!
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex gap-2">
          {orientationButtons.map((value, index) => {
            return (
              <Button
                key={value}
                className="min-w-[100px] lg:min-w-[120px]"
                onClick={() => setOrientation(value)}
              >
                {value}
              </Button>
            );
          })}
        </CardFooter>
      </Card>
    );
  }

  return (
    <>
      <h1 className="text-xl  font-light uppercase flex items-center justify-center gap-2">
        Layout: {orientation}
      </h1>
    </>
  );
}
