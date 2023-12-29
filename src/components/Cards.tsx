import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function Cards() {
  return (
    <div className="max-w-[200px] max-h-[260px] w-[200px] h-[260px] relative rounded-[30px] bg-blue-500 bg-[length:200px_260px] bg-no-repeat overflow-hidden bg-cardBgDefault bg- bg-center">
      <Link href={""} passHref={true}>
        <div className="flex justify-center items-center h-full w-full group z-20">
          <Eye
            width={60}
            height={60}
            stroke="#3CE37C"
            className="z-10 absolute top-0 left-0 p-3 md:hidden"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 md:hover:bg-opacity-80 transition ease-in-out duration-300 z-0 w-full h-full flex items-center justify-center">
            <Eye
              width={90}
              height={90}
              stroke="#B9B9B9"
              className="z-20 hidden group-hover:flex transition ease-in-out duration-300"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
