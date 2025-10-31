"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import { motion } from "framer-motion";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  // 🔹 Start loader instantly when user clicks a link/button leading to a new route
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Find the nearest clickable element (link/button)
      const linkElement =
        target.closest("a") || target.closest("[role='link']");

      // ✅ Check if it's a real link and not the same route
      if (linkElement && linkElement instanceof HTMLAnchorElement) {
        const href = linkElement.getAttribute("href");
        if (href && href !== pathname && !href.startsWith("#")) {
          setLoading(true);
        }
      }

      // ✅ For buttons, loader will trigger only if they cause navigation (not same page actions)
      const buttonElement = target.closest("button");
      if (buttonElement && buttonElement.getAttribute("data-nav") === "true") {
        setLoading(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // 🔹 Stop loader after route changes
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
