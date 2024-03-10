import { tv } from "tailwind-variants";

type ButtonProps = {
	buttons: {
		label: string;
		click?: () => void;
		type?: "button" | "submit" | "reset";
	}[];
};

const buttonStyles = tv({
	base: `px-4 py-2 text-sm font-medium text-gray-900 bg-white border 
    hover:bg-gray-100 dark:bg-gray-800
     dark:border-gray-700 dark:text-white dark:hover:text-white 
     dark:hover:bg-gray-700`,
	variants: {
		border: {
			first: "rounded-l-lg",
			middle: "border-t border-b",
			last: "rounded-r-lg",
		},
	},
});

export default function ButtonGroup({ buttons }: ButtonProps) {
	const getStatusButton = (index: number) => {
		if (index === 0) {
			return "first";
		}

		if (index === buttons.length - 1) {
			return "last";
		}

		return "middle";
	};

	return (
		<div className="inline-flex rounded-md shadow-sm" role="group">
			{buttons.map((button, index) => {
				return (
					<button
						className={buttonStyles({ border: getStatusButton(index) })}
						type={button.type || "button"}
						onClick={button?.click}
					>
						{button.label}
					</button>
				);
			})}
		</div>
	);
}
