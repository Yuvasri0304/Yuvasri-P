"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Force dark mode as the default theme
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      setTheme("dark");
    }
    setMounted(true);
  }, [setTheme]);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-200" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800" />
      )}
    </Button>
  );
}
