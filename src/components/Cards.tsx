import Link from "next/link";
import { Eye, Github } from "lucide-react";

interface CardsProps {
  title: string;
  linkDeploy: string;
  linkGithub: string;
  backgroundImage: string;
}

export default function Cards({ title, linkDeploy, linkGithub, backgroundImage }: CardsProps) {
  return (
    <>
      <Link
        href={linkDeploy}
        passHref={true}
        className="max-w-[200px] max-h-[260px] w-full h-[260px] rounded-[20px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex justify-center items-center h-[260px] w-[200px] group z-20 p-0 m-0">
          <Eye
            width={60}
            height={60}
            stroke="#3CE37C"
            className="z-10 absolute top-0 left-0 p-3 md:hidden rounded-b-[15px] border-none"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 md:hover:bg-opacity-80 transition ease-in-out duration-300 z-0 w-full h-full flex items-center justify-center p-0 m-0">
            <Eye
              width={90}
              height={90}
              stroke="#3CE37C"
              className="z-20 hidden group-hover:flex transition ease-in-out duration-300"
            />
          </div>
        </div>
      </Link>
      <div className="flex justify-between px-2 gap-2">
        <h2 className="flex-grow overflow-hidden whitespace-nowrap text-overflow-ellipsis text-[#B9B9B9]">
          {title}
        </h2>
        <Link href={linkGithub} className="flex-shrink-0">
          <Github
            width={24}
            height={24}
            className="hover:text-green-400 text-[#B9B9B9]"
          />
        </Link>
      </div>
    </>
  );
}
