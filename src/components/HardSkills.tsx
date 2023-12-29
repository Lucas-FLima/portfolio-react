const myInformations = [
  {
    title: "Linguagem de Programação",
    descricao: "JavaScript + Node.js, TypeScript, PHP e Python",
  },
  {
    title: "Frameworks de desenvolvimento",
    descricao: "React.js, React Native e Laravel",
  },
  { title: "Banco de dados e consulta de dados", descricao: "SQL e NoSQL" },
  { title: "Design", descricao: "Figma, Photoshop e Adobe XD" },
];

export default function HardSkills() {
  return (
    <div className="flex flex-col items-start md:justify-between w-full p-2">
      <h2 className="text-green-400 text-[40px] font-medium">Hard skills</h2>
      <ul className="list-disc md:list-none flex flex-col w-full md:flex-wrap ml-6 md:ml-0 pr-10 md:pr-0">
        {myInformations.map((info, index) => (
          <li
            key={index}
            className="text-[#B9B9B9] text-[18px] md:text-[20px] font-light mt-2"
          >
            <span className="font-medium">{info.title}: </span>
            <span className="font-normal">{info.descricao}.</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
