"use client";
import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

type ContextMenuProps = {
	title: string;
	components: { title: string; click: () => void }[];
};

export default function ContextMenu({ title, components }: ContextMenuProps) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{title}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									onClick={component.click}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, onClick, ...props }, ref) => {
	return (
		<li>
			<Button onClick={onClick} variant={"ghost"}>
				{title}
			</Button>
		</li>
	);
});
ListItem.displayName = "ListItem";
