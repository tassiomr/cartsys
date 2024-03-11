import { cn } from "@/lib/utils";
import { Orientation } from "@/types/wizard";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import React from "react";
import { tv } from "tailwind-variants";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

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
      isComplete: "bg-primary",
      isCurrent: "bg-primary-foreground text-primary border border-primary",
    },
  },
});

const dotStyle = tv({
  base: "bg-primary",
  variants: {
    status: {
      isComplete: "bg-primary",
      isCurrent: "bg-black dark:bg-white",
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
const buttonStyle = tv({
  base: "p-0",
  variants: {
    visible: {
      no: "opacity-0 cursor-default",
      yes: "",
    },
  },
});

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

  const handleOnBackward = () => {
    if (current > 1) {
      onBackward();
    }
  };
  const handleOnForward = () => {
    if (current < totalSteps) {
      onForward();
    }
  };
  return (
    <div className={mainStyle({ orientation })}>
      <Button
        variant={"ghost"}
        size={"icon"}
        className={buttonStyle({ visible: current > 1 ? "yes" : "no" })}
        onClick={handleOnBackward}
      >
        {orientation === Orientation.horizontal ? (
          <ChevronLeft className={iconsStyle} />
        ) : (
          <ChevronUp className={iconsStyle} />
        )}
      </Button>

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
      <Button
        variant={"ghost"}
        className={buttonStyle({
          visible: current < totalSteps ? "yes" : "no",
        })}
        onClick={handleOnForward}
      >
        {orientation === Orientation.horizontal ? (
          <ChevronRight className={iconsStyle} />
        ) : (
          <ChevronDown className={iconsStyle} />
        )}
      </Button>
    </div>
  );
}
