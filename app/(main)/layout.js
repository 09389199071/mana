"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useIsMobileView";

export default function DefaultLayout({ children }) {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const [open, setOpen] = useState(isMobileView ? true : false);

  const toggleDrawer = () => {
    setOpen((v) => !v);
  };
  useEffect(() => {
    setOpen(isMobileView ? true : false);
  }, [isMobileView]);
  return (
    <>
      <div className={!isMobileView && "flex"}>
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <main
          className={
            isMobileView ? " p-6 bg-gray-100" : "flex-1 p-6 bg-gray-100"
          }
        >
          <Header toggleDrawer={toggleDrawer} />
          {children}
        </main>
      </div>
    </>
  );
}
