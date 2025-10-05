"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderLayout() {
  const pathname = usePathname();

  // Add any routes where you want to hide the navbar
  const noNavbarRoutes = ["/experiences"];

  const hideNavbar = noNavbarRoutes.includes(pathname);

  return (
    <>
      {!hideNavbar && <Header />}
    </>
  );
}