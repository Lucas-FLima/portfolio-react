export default function Projetos() {
  return (
    <div className="flex flex-col items-start md:justify-between w-full p-2">
      <h2 className="text-green-400 text-[40px] font-medium">
        Projetos realizados
      </h2>
      {/* <div className="flex flex-col items-center md:flex-row w-full mt-3 gap-4 flex-wrap">
        <div className="flex flex-col max-w-[200px] w-full gap-1">
          <Cards linkDeploy="teste" linkGithub="https://github.com/Lucas-FLima/ticket-control" title="ticket-control" backgroundImage="/backCardDefault.png"/>
        </div>
      </div> */}

      <div className="flex flex-row items-center justify-center w-full p-2">
        <p className="text-green-100 text-[25px] text-center w-full p-2">
          Em breve
        </p>
      </div>
    </div>
  );
}
