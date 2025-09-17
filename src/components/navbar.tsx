"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu
      viewport={false}
      className="p-4 w-full max-w-none justify-start"
    >
      <Image src="/temochead.svg" alt="logo" width={50} height={50} />
      <h1 className="text-xl font-bold text-utd-primary">Ask Temoc</h1>
      <NavigationMenuList>
        <NavigationMenuItem className="px-4 py-2">
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="text-black font-boldrounded-md transition-colors"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
