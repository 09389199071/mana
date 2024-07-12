"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
