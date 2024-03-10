import { cn } from "@/lib/utils";
import { Orientation } from "@/types/wizard";
import React from "react";
import { tv } from "tailwind-variants";
import { Label } from "../ui/label";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { Button } from "../ui/button";

const mainStyle = tv({
  base: "flex flex-row w-full justify-center items-center gap-2",
  variants: {
    orientation: {
      [Orientation.horizontal]: "",
      [Orientation.none]: "",
      [Orientation.vertical]: "flex-col w-1/6",
    },
  },
});

const stepStyle = tv({
  base: `w-6 h-6 rounded-full bg-primary text-primary-foreground flex 
      justify-center items-center`,
  variants: {
    status: {
      isComplete: "bg-indigo-500",
      isCurrent: "bg-primary",
    },
  },
});

const dotStyle = tv({
  base: "bg-primary",
  variants: {
    status: {
      isComplete: "bg-indigo-400",
      isCurrent: "bg-primary",
    },
    orientation: {
      [Orientation.vertical]: "h-[20px] w-[1px]",
      [Orientation.horizontal]: "h-[1px] w-[30px]",
      [Orientation.none]: "",
    },
  },
});

const wrapperStyle = tv({
  base: "flex justify-center items-center gap-2",
  variants: {
    orientation: {
      [Orientation.vertical]: "flex-col",
      [Orientation.horizontal]: "flex-row",
      [Orientation.none]: "",
    },
  },
});

const iconsStyle = "h-8 w-8";
const buttonStyle = "w-12 h-12 p-0";

type StepperType = {
  current: number;
  totalSteps: number;
  orientation: Orientation;
  onBackward: () => void;
  onForward: () => void;
};

export default function Stepper({
  current,
  totalSteps,
  orientation,
  onBackward,
  onForward,
}: StepperType) {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className={mainStyle({ orientation })}>
      {current > 1 ? (
        <Button variant={"ghost"} className={buttonStyle} onClick={onBackward}>
          {orientation === Orientation.horizontal ? (
            <ChevronLeft className={iconsStyle} />
          ) : (
            <ChevronUp className={iconsStyle} />
          )}
        </Button>
      ) : null}

      {steps.map((step) => {
        const status = step <= current ? "isComplete" : "isCurrent";
        const statusDot = step < current ? "isComplete" : "isCurrent";
        const style = stepStyle({
          status,
        });
        return (
          <React.Fragment key={step}>
            <div className={wrapperStyle({ orientation })}>
              <div className={style} key={step}>
                {step}
              </div>
              <Label>Step</Label>
            </div>

            {steps.length !== step ? (
              <div className={dotStyle({ status: statusDot, orientation })} />
            ) : null}
          </React.Fragment>
        );
      })}
      {current < totalSteps && (
        <Button variant={"ghost"} className={buttonStyle} onClick={onForward}>
          {orientation === Orientation.horizontal ? (
            <ChevronRight className={iconsStyle} />
          ) : (
            <ChevronDown className={iconsStyle} />
          )}
        </Button>
      )}
    </div>
  );
}
