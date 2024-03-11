"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toogle";
import constants from "@/config/constants";

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-1 bg-primary-foreground flex justify-between px-12 items-center w-screen h-16">
      <Link href={"/"}>
        <p>{constants.root.title}</p>
      </Link>
      <div className="flex gap-2">
        {pathname !== "/wizard-creator" && (
          <Link href="/wizard-creator">
            <Button>{constants.root.nav.buttons.create}</Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}
