import Image from "next/image";

export default function Header() {
  return (
    <div className="max-w-6xl bg-[#161616] w-full p-5 flex justify-between items-center rounded-b-[30px] shadow-custom">
      <Image
        src="/logo.png"
        width={70}
        height={70}
        alt={"Imagem de Logo de Desenvolvedor Fullstack"}
      />
      <div>
        <ul className="flex justify-around flex-1 max-w-md gap-3">
          <li>
            <a className="text-[#B9B9B9] text-xl font-bold" href="#">Sobre</a>
          </li>
          <li>
            <a className="text-[#B9B9B9] text-xl font-bold" href="#">Soft skills</a>
          </li>
          <li>
            <a className="text-[#B9B9B9] text-xl font-bold" href="#">Hard skills</a>
          </li>
          <li>
            <a className="text-[#B9B9B9] text-xl font-bold" href="#">Metas</a>
          </li>
          <li>
            <a className="text-[#B9B9B9] text-xl font-bold" href="#">Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
