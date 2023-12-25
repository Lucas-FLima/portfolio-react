"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function NavBar({open}: {open: () => void}) {
  const scrolled = useScrollTop();
  const [localState, setLocalState] = useState<String>("sobre");

  return (
    <div
      className={cn(
        "z-50 bg-[#161616] fixed transition-all top-0 flex md:justify-between justify-center items-center p-4 px-6 h-[100px] w-[100px]  md:w-[1140px] rounded-b-[30px] shadow-navBar",
        scrolled && "md:w-full md:px-[210px] rounded-full mt-4 md:mt-0 md:rounded-none shadow-navBar"
      )}
    >
      <Image src={"/logo.svg"} className="w-[45px] h-[45px] md:w-[70px] md:h-[70px]" width={70} height={70} alt="Logo"
        onClick={open}
      />

      <nav className="md:block hidden">
        <ul className="flex items-center gap-8 text-[#B9B9B9]">
          <li className="">
            <a
              href="#about"
              className={cn(
                "font-bold text-[20px] transition-colors duration-[.8s] ease-in-out",
                localState === "sobre" && "text-[#3CE37C]"
              )}
              onClick={() => setLocalState("sobre")}
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
              onClick={() => setLocalState("soft")}
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
              onClick={() => setLocalState("hard")}
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
              onClick={() => setLocalState("metas")}
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
              onClick={() => setLocalState("portfolio")}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
