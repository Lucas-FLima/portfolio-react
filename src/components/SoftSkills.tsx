const myInformations = [
  { title: "Empatia" },
  { title: "Ética" },
  { title: "Colaboração" },
  { title: "Alta flexibilidade" },
  { title: "Resiliência" },
  { title: "Inteligência emocional" },
  { title: "Criatividade" },
  { title: "Comunicação" },
];

export default function SoftSkills() {
  return (
    <div className="flex flex-col items-start md:justify-between w-full p-2">
      <h2 className="text-green-400 text-[40px] font-medium">Soft skills</h2>
      <ul className="list-disc md:list-none flex flex-col md:flex-row w-full md:flex-wrap md:gap-6 ml-6 md:ml-0">
        {myInformations.map((info, index) => (
          <li
            key={index}
            className="text-[#B9B9B9] text-[18px] md:text-[20px] font-light mt-2"
          >
            {info.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
