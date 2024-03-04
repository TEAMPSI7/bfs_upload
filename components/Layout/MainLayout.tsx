"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import React from "react";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <main className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} />

      <div
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300",
          open ? "md:ml-60" : "md:ml-20",
        )}
      >
        {children}
      </div>
    </main>
  );
}
