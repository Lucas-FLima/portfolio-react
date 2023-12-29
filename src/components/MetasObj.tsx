export default function MetasObj() {
  return (
    <div className="flex flex-col items-start md:justify-between w-full p-2">
      <h2 className="text-green-400 text-[40px] font-medium">
        Metas e objetivos
      </h2>
      <div className="flex flex-col w-full mt-3">
        <p className="text-[#B9B9B9] text-[18px] md:text-[20px] font-light">
          Atualmente estou estudando para realizar a prova da certificação{" "}
          <span className="font-medium">AWS CLOUD PRACTITIONER.</span>
        </p>
        <p className="text-[#B9B9B9] text-[18px] md:text-[20px] font-light">
          Também estou focado em desenvolver minhas habilidades em
          desenvolvimento mobile com{" "}
          <span className="font-medium">Java, Kotlin e Swift.</span>
        </p>
      </div>
    </div>
  );
}
