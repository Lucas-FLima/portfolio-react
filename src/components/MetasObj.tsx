export default function MetasObj() {
  return (
    <div className="flex flex-col items-start md:justify-between w-full p-2">
      <h2 className="text-green-400 text-[40px] font-medium">
        Metas e objetivos
      </h2>
      <div className="flex flex-col w-full mt-3">
        <p className="text-[#B9B9B9] text-[18px] md:text-[20px] font-light">
          Atualmente estou estudando para realizar a prova da certificação{" "}
          <span className="font-medium text-green-100">AZ-900 da Microsoft Azure.</span>
        </p>
        <p className="text-[#B9B9B9] text-[18px] md:text-[20px] font-light">
          Também estou focado em aprimorar minhas habilidades no âmbito interpessoal, destacando-se as habilidades de{" "}
          <span className="font-medium text-green-100">Liderança, Resolução de Conflitos e Comunicação.</span>
        </p>
      </div>
    </div>
  );
}
