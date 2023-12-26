"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import React, { useContext } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

import { NavMobileContext } from "@/context/NavMobile";

export default function NavMobileContainer() {
  const { open, setOpen } = useContext(NavMobileContext);
  const [localState, setLocalState] = useState<String>("sobre");

  const handleConfirmOption = (option: string) => {
    setLocalState(option);
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "min-h-screen h-full w-full fixed top-0 bg-[#161616] z-50",
        !open && "hidden"
      )}
    >
      <div className="flex justify-end items-center p-4">
        <button onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#B9B9B9] hover:text-[#3CE37C] transition-colors duration-[.8s] ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
          </svg>
        </button>
      </div>
      <ul className="flex h-full flex-col items-center justify-center pl-2 gap-8 text-[#B9B9B9]">
        <li className="">
          <a
            href="#about"
            className={cn(
              "font-bold text-[20px] transition-colors duration-[.8s] ease-in-out",
              localState === "sobre" && "text-[#3CE37C]"
            )}
            onClick={() => handleConfirmOption("sobre")}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#soft"
            className={cn(
              "font-bold text-[20px] transition-colors duration-[.8s] ease-in-out",
              localState === "soft" && "text-[#3CE37C]"
            )}
            onClick={() => handleConfirmOption("soft")}
          >
            Soft Skills
          </a>
        </li>
        <li>
          <a
            href="#hard"
            className={cn(
              "font-bold text-[20px] transition-colors duration-[.8s] ease-in-out",
              localState === "hard" && "text-[#3CE37C]"
            )}
            onClick={() => handleConfirmOption("hard")}
          >
            Hard skills
          </a>
        </li>
        <li>
          <a
            href="#metas"
            className={cn(
              "font-bold text-[20px] transition-colors duration-[.8s] ease-in-out",
              localState === "metas" && "text-[#3CE37C]"
            )}
            onClick={() => handleConfirmOption("metas")}
          >
            Metas
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={cn(
              "font-bold text-[20px] transition-colors duration-[.8s] ease-in-out",
              localState === "portfolio" && "text-[#3CE37C]"
            )}
            onClick={() => handleConfirmOption("portfolio")}
          >
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}
