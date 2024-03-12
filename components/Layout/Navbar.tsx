"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ Menus }: { Menus?: any }) {
  const path = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-bfs_soft-black pb-4 pt-5">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-0 top-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <X className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center justify-center px-4">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="LOGO"
                    width={1080}
                    height={1080}
                    className="h-16 w-16 rounded-xl"
                  />
                </Link>
              </div>
              <div className="mt-4 space-y-1 p-3">
                {Menus.map((Menu: any, index: number) => {
                  const Icon = Icons[Menu.icon as keyof typeof Icons];

                  return (
                    <Link
                      href={Menu.url}
                      key={Menu.url}
                      // className={`flex w-full gap-x-2 rounded-lg p-3 transition-colors duration-200 ease-in-out hover:bg-bfs_primary/20
                      // ${!open && "justify-center"}]
                      // `}

                      className={classNames(
                        path === Menu.url ? "bg-bfs_primary/20" : "",
                        `flex w-full gap-x-2 rounded-lg p-3 transition-colors duration-200 ease-in-out hover:bg-bfs_primary/20 
                    ${!open && "justify-center"}`,
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        strokeWidth={2}
                        className="h-6 w-6 flex-shrink-0 text-bfs_primary"
                      />
                      <span
                        className={`single-line ${!open && "hidden"}
                    text-bfs_dark-gray
                  `}
                      >
                        {Menu.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>
      <div className="block p-4 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="LOGO"
              width={1080}
              height={1080}
              className="h-10 w-10 rounded-md object-contain md:h-16 md:w-16"
            />
            <h4 className="md:text-2xl">BattleForSupremacy.TV</h4>
          </div>

          <button
            type="button"
            className="rounded-md bg-gray-500/10 p-2 hover:scale-105 active:scale-105"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu size={32} strokeWidth={1.5} className="text-bfs_secondary" />
          </button>
        </div>
      </div>
    </>
  );
}
