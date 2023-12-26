import Image from "next/image";

const myInformations = [
  { title: "24 anos." },
  { title: "Moro em Campo Grande, MS." },
  { title: "Sou desenvolvedor fullstack na Resoluti." },
  {
    title: "Estou no meu terceiro semestre do curso de Engenharia de Software.",
  },
  {
    title:
      "Casado, focado na minha família e em construir uma carreira de sucesso.",
  },
];

export default function Sobre() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between w-full py-2 max-w-[1140px] px-2">
      <Image
        src={"/perfil.jpeg"}
        className="w-[250px] h-[250px] md:w-[286px] md:h-[286px] rounded-full"
        width={300}
        height={300}
        alt="Foto de perfil de Lucas Lima"
      />

      <div className=" ml-6 px-2 md:ml-14 max-w-full w-full">
        <h2 className="text-green-400 text-[40px] font-medium">Sobre</h2>
        <ul className="list-disc">
          {myInformations.map((info, index) => (
            <li
              key={index}
              className="text-[#B9B9B9] text-[20px] md:text-[24px] font-light mt-2"
            >
              {info.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
