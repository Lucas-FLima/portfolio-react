import Image from "next/image";

export default function Sobre() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between w-full py-2 max-w-[1140px] ">
      <Image
        src={"/perfil.jpeg"}
        className="w-[250px] h-[250px] md:w-[286px] md:h-[286px] rounded-full"
        width={300}
        height={300}
        alt="Foto de perfil de Lucas Lima"
      />

      <div className="self-start flex-1 ml-14">
        <h2 className="text-green-400 text-[40px] font-medium">Sobre</h2>

        <h4 className="text-[#B9B9B9] text-[24px] font-normal mt-2">24 anos</h4>
        <h4 className="text-[#B9B9B9] text-[24px] font-normal mt-2">
          Moro em Campo Grande, MS.
        </h4>
        <h4 className="text-[#B9B9B9] text-[24px] font-normal mt-2">
          Sou desenvolvedor fullstack na Resoluti.
        </h4>
        <h4 className="text-[#B9B9B9] text-[24px] font-normal mt-2">
          Estou no meu terceiro semestre do curso de Engenharia de Software.
        </h4>
        <h4 className="text-[#B9B9B9] text-[24px] font-normal mt-2">
          Casado, focado na minha família e em construir uma carreira de
          sucesso.
        </h4>
      </div>
    </div>
  );
}
