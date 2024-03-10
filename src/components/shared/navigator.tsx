"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toogle";

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-1 bg-primary-foreground flex justify-between px-12 items-center w-screen h-16">
      <p>CartSys Challanger</p>
      <div className="flex gap-2">
        {pathname !== "/wizard-creator" && (
          <Link href="/wizard-creator">
            <Button>Wizard Creator</Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}
