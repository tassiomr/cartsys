import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NavigationMenu() {
  return (
    <nav className="fixed z-1 bg-primary-foreground flex justify-between px-12 items-center w-screen h-16">
      <p>CartSys Challanger</p>
      <Link href="/wizard-creator">
        <Button>Wizard Creator</Button>
      </Link>
    </nav>
  );
}
