const myInformations = [
  {
    title: "Linguagem de Programação",
    descricao: "JavaScript, TypeScript, Python e PHP",
  },
  {
    title: "Frameworks e Bibliotecas de Desenvolvimento",
    descricao: "NodeJS, Express, React.js, React Native, Electron, Next.js, Redux, Laravel, Prisma, Sequelize, Bootstrap, MaterialUI, Tailwind, Styled Components, Vite",
  },
  { title: "Ferramentas de Desenvolvimento e IDEs", descricao: "Git, Github, Android Studio, Docker, Firebase, Postman, Pycharm, Vscode, NPM" },
  { title: "Bancos de Dados", descricao: "MongoDB, MySql, PostgreSQL, SQLite" },
  { title: "Ferramentas de Automação e Bots", descricao: "Selenium, Puppeteer, Whatsapp-web.js" },
  { title: "Ferramentas de Organização e Documentação", descricao: "Notion, Obsidian" },
  { title: "Design", descricao: "Figma, Photoshop" },
];

export default function HardSkills() {
  return (
    <div className="flex flex-col items-start md:justify-between w-full p-2">
      <h2 className="text-green-400 text-[40px] font-medium">Hard skills</h2>
      <ul className="list-disc md:list-none flex flex-col w-full md:flex-wrap ml-6 md:ml-0 pr-10 md:pr-0">
        {myInformations.map((info, index) => (
          <li
            key={index}
            className="text-[18px] md:text-[20px] font-light mt-2"
          >
            <span className="font-medium text-green-100">{info.title}: </span>
            <span className="font-normal text-[#B9B9B9]">{info.descricao}.</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
