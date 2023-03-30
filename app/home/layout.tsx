"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="relative border-2 rounded-md border-red-300">
      <h4 className="text-sm absolute font-bold text-center text-white bg-red-300 p-2 rounded-sm top-0 right-0">
        Home Page Layout
      </h4>
      <nav className="flex flex-row justify-center mb-2">
        <Link href={"/home"}>
          <button
            className={[
              "py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium",
              pathname === "/home"
                ? "text-blue-500 border-blue-500"
                : "text-gray-500",
            ].join(" ")}
          >
            Home
          </button>
        </Link>
        <Link href={"/home/pokemon"}>
          <button
            className={[
              "py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium",
              pathname.includes("/home/pokemon")
                ? "text-blue-500 border-blue-500"
                : "text-gray-500",
            ].join(" ")}
          >
            Pokemon
          </button>
        </Link>
        <Link href={"/home/items"}>
          <button
            className={[
              "py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium",
              pathname.includes("/home/items")
                ? "text-blue-500 border-blue-500"
                : "text-gray-500",
            ].join(" ")}
          >
            Items
          </button>
        </Link>
      </nav>
      <>{children}</>
    </div>
  );
};

export default Layout;
