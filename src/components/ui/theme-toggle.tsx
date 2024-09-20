"use client"
//* Libraries imports
import { useState } from "react";
import { Moon, Sun, Computer } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

//* Components imports
import { Button } from "@/components/ui/button";

type ThemeOptions = "system" | "light" | "dark";

const variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  }
}

const icon = {
  system: <Computer size={24} />,
  light: <Sun size={24} />,
  dark: <Moon size={24} />,
};

export function ThemeToggle() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions>("system");

  const { setTheme } = useTheme();

  const handleThemeChange = () => {

    if (selectedTheme === "system") {
      setSelectedTheme("light");
      return setTheme("light");
    }

    if (selectedTheme === "light") {
      setSelectedTheme("dark");
      return setTheme("dark");
    }

    if (selectedTheme === "dark") {
      setSelectedTheme("system");
      return setTheme("system");
    }
  }

  return (
    <Button
      onPointerDown={handleThemeChange}
      size="icon"
      variant="ghost"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          transition={{
            type: "spring",
            stiffness: 75,
            duration: 0.2,
          }}
          variants={variants}
          key={selectedTheme}
        >
          {icon[selectedTheme]}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}