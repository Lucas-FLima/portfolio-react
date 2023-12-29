import Cards from "./Cards";

export default function Projetos() {
  return (
    <div className="flex flex-col items-start md:justify-between w-full p-2">
      <h2 className="text-green-400 text-[40px] font-medium">
        Projetos realizados
      </h2>
      <div className="flex flex-col w-full mt-3">
        <Cards />
      </div>
    </div>
  );
}
