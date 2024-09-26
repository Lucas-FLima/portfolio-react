"use client";
import Apresentation from "@/components/apresentation";
import ApresentationMobile from "@/components/apresentationMobile";
import HardSkills from "@/components/HardSkills";
import MetasObj from "@/components/MetasObj";
import NavBar from "@/components/navBar";
import NavMobileContainer from "@/components/navMobileContainer";
import Projetos from "@/components/Projetos";
import Sobre from "@/components/Sobre";
import SoftSkills from "@/components/SoftSkills";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById("about");
      const aboutOffset = aboutElement ? aboutElement.offsetTop : 0;
      const softElement = document.getElementById("soft");
      const softOffset = softElement ? softElement.offsetTop : 0;
      const hardElement = document.getElementById("hard");
      const hardOffset = hardElement ? hardElement.offsetTop : 0;
      const metasElement = document.getElementById("metas");
      const metasOffset = metasElement ? metasElement.offsetTop : 0;
      const portfolioElement = document.getElementById("portfolio");
      const portfolioOffset = portfolioElement ? portfolioElement.offsetTop : 0;

      const scrollPos = window.scrollY + 200;

      if (scrollPos < softOffset) {
        setActiveSection("about");
      } else if (scrollPos < hardOffset) {
        setActiveSection("soft");
      } else if (scrollPos < metasOffset) {
        setActiveSection("hard");
      } else if (scrollPos < portfolioOffset) {
        setActiveSection("metas");
      } else {
        setActiveSection("portfolio");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex relative justify-center flex-col items-center px-2">
      <NavBar activeSection={activeSection} />
      <NavMobileContainer />
      <section className="mt-48 w-full flex flex-col justify-center items-center">
        <h3 className="text-2xl md:text-3xl text-green-400">Olá! Eu sou o</h3>
        <section>
          <div className="hidden md:block">
            <Apresentation />
          </div>
          <div className="md:hidden">
            <ApresentationMobile />
          </div>
        </section>
        <h3 className="text-[25px] md:text-[40px] text-green-400 mt-2">
          Desenvolvedor Full Stack
        </h3>
        <h3 className="text-[20px] md:text-[24px] text-[#B9B9B9] font-light italic text-center mt-2">
          Soluções inteligentes para problemas complexos.
        </h3>
        <div className="flex flex-col md:flex-row item-center justify-center gap-5 mt-4">
          <button className="p-1 flex justify-center items-center gap-1">
            <Image
              src={"/ddoc.svg"}
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] color-[#B9B9B9]"
              width={70}
              height={70}
              alt="Curriculo download icon"
            />
            <a href="#about" className="text-[#B9B9B9] text-[20px]">
              Curriculo
            </a>
          </button>
          <button className="p-1 flex justify-center items-center gap-1">
            <Image
              src={"/linkedin.svg"}
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] color-[#B9B9B9]"
              width={70}
              height={70}
              alt="Linkedin icon"
            />
            <a href="https://www.linkedin.com/in/lucasfreitaslima/" target="_blank" className="text-[#B9B9B9] text-[20px]">
              Linkedin
            </a>
          </button>
          <button className="p-1 flex justify-center items-center gap-1">
            <Image
              src={"/github.svg"}
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] color-[#B9B9B9]"
              width={70}
              height={70}
              alt="Github icon"
            />
            <a href="https://github.com/Lucas-FLima" target="_blank" className="text-[#B9B9B9] text-[20px]">
              Github
            </a>
          </button>
        </div>
      </section>

      <section
        className="mt-20 max-w-full w-full flex items-center justify-center flex-col md:flex-row"
        id="about"
      >
        <Sobre />
      </section>

      <section
        className="mt-10 max-w-[1140px] w-full flex items-start justify-start flex-col"
        id="soft"
      >
        <SoftSkills />
      </section>
      <section
        className="mt-10 max-w-[1140px] w-full flex items-start justify-start flex-col"
        id="hard"
      >
        <HardSkills />
      </section>
      <section
        className="mt-10 max-w-[1140px] w-full flex items-start justify-start flex-col"
        id="metas"
      >
        <MetasObj />
      </section>
      <section
        className="mt-10 max-w-[1140px] w-full flex items-start justify-start flex-col"
        id="portfolio"
      >
        <Projetos />
      </section>
    </main>
  );
}
