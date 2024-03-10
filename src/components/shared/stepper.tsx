import { cn } from "@/lib/utils";
import { Orientation } from "@/types/wizard";
import React from "react";
import { tv } from "tailwind-variants";

const mainStyle = tv({
	base: "flex flex-row w-full justify-center items-center gap-2",
	variants: {
		orientation: {
			[Orientation.horizontal]: "",
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
		},
	},
});

type StepperType = {
	current: number;
	totalSteps: number;
	orientation: Orientation;
};
export default function Stepper({
	current,
	totalSteps,
	orientation,
}: StepperType) {
	const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

	return (
		<div className={mainStyle({ orientation })}>
			{steps.map((step) => {
				const status = step <= current ? "isComplete" : "isCurrent";
				const statusDot = step < current ? "isComplete" : "isCurrent";
				const style = stepStyle({
					status,
				});
				return (
					<React.Fragment key={step}>
						<div className={style} key={step}>
							{step}
						</div>
						{steps.length !== step ? (
							<div className={dotStyle({ status: statusDot, orientation })} />
						) : null}
					</React.Fragment>
				);
			})}
		</div>
	);
}
