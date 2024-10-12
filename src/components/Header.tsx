import Link from "next/link";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { LuFolderClock } from "react-icons/lu";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="w-full  h-28  content-center">
      <div className="w-full max-w-[1120px] justify-between items-center flex  mx-auto">
        <div>
          <span className="flex items-center gap-2">
            <RiMoneyEuroCircleFill className="w-9 h-9" />
            <span className="text-lg">
              dev<strong>Money</strong>
            </span>
          </span>
        </div>
        <div className=" flex gap-3">
          <Link
            href={""}
            className="bg-background text-foreground text-sm py-1 px-3 content-center border border-border rounded-radius hover:bg-secondary hover:text-secondary-foreground"
          >
            <span className="hidden md:inline">Histórico</span>
            <LuFolderClock className="md:hidden" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
