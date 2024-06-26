"use client";
import React from "react";
import { Separator } from "../ui/separator";
import { motion as m } from "framer-motion";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Header from "./Header";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Nav = () => {
  const path = usePathname();

  return (
    <nav className="dark:text-white z-10 text-black fixed top-0 w-full dark:bg-zinc-950 bg-opacity-40 dark:bg-opacity-40 backdrop-filter backdrop-blur-md">
      <Header />
      <Separator />
      <div className="py-2.5 hidden md:block">
        <div className="flex justify-between mx-10">
          <div className="flex pt-1.5 space-x-5">
            <Link href={"/"}>
              <m.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={logo}
                  alt="Minecraft Utilities"
                  width={25}
                  height={25}
                />
              </m.div>
            </Link>
            <div>
              <ul className="flex font-medium space-x-5">
                <Link href={"/"}>
                  <m.li
                    className={`cursor-pointer ${
                      path === "/"
                        ? "dark:text-white"
                        : "dark:text-gray-500 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Home
                  </m.li>
                </Link>
                <Link
                  href={"https://minecraftutilities.github.io/documentation/"}
                >
                  <m.li
                    className={`cursor-pointer ${
                      path === "/documentation"
                        ? "dark:text-white"
                        : "dark:text-gray-500 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Documentation
                  </m.li>
                </Link>
                <Link href={"/blog"}>
                  <m.li
                    className={`cursor-pointer ${
                      path === "/status"
                        ? "dark:text-white"
                        : "dark:text-gray-500 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Blog
                  </m.li>
                </Link>
                <Link
                  href={"https://minecraftutilities.statuspage.io"}
                  target="_blank"
                >
                  <m.li
                    className={`cursor-pointer ${
                      path === "/status"
                        ? "dark:text-white"
                        : "dark:text-gray-500 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Status
                  </m.li>
                </Link>
                <Link href={"/team"}>
                  <m.li
                    className={`cursor-pointer ${
                      path === "/team"
                        ? "dark:text-white"
                        : "dark:text-gray-500 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Team
                  </m.li>
                </Link>
                <Link href={"/invite"}>
                  <m.li
                    className={`cursor-pointer ${
                      path === "/invite"
                        ? "dark:text-white"
                        : "dark:text-gray-500 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Invite
                  </m.li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="space-x-5 flex">
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      {/* Smaller Screen */}
      <div className="py-2.5 md:hidden">
        <div className="flex pt-1.5 pb-1 mx-5 justify-between">
          <Link href={"/"}>
            <m.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={logo}
                alt="Minecraft Utilities"
                width={25}
                height={25}
              />
            </m.div>
          </Link>
          <div>
            <Sheet>
              <SheetTrigger>
                <HiMiniBars3BottomRight className="text-xl" />
              </SheetTrigger>
              <SheetContent side={"left"} className="">
                <div className="mx-5 space-y-3">
                  <SheetTitle>Minecraft Utilities</SheetTitle>
                  <m.div className="hover:text-gray-500">
                    <Link href={"/"}>Home</Link>
                  </m.div>
                  <m.div className="hover:text-gray-500">
                    <Link
                      href={
                        "https://minecraftutilities.github.io/documentation/"
                      }
                    >
                      Documentation
                    </Link>
                  </m.div>
                  <m.div className="hover:text-gray-500">
                    <Link href={"/blog"}>Blog</Link>
                  </m.div>
                  <m.div className="hover:text-gray-500">
                    <Link
                      href={"https://minecraftutilities.statuspage.io"}
                      target="_blank"
                    >
                      Status
                    </Link>
                  </m.div>
                  <m.div className="hover:text-gray-500">
                    <Link href={"/team"}>Team</Link>
                  </m.div>
                  <m.div className="hover:text-gray-500">
                    <Link href={"/invite"}>Invite</Link>
                  </m.div>
                  <ModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <Separator className="" />
    </nav>
  );
};

export default Nav;
