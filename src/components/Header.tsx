import Link from "next/link";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { BsDatabaseAdd } from "react-icons/bs";
import { ModeToggle } from "./ModeToggle";
import TypingAnimation from "./ui/typing-animation";
import ShinyButton from "./ui/shiny-button";

export function Header() {
  return (
    <header className="w-full  h-24  content-center mx-1">
      <div className="w-full max-w-[1120px] justify-around md:justify-between items-center gap-12 md:gap-0 flex  mx-auto">
        <div>
          <span className="flex items-center gap-2 ">
            <RiMoneyEuroCircleFill className="w-9 h-9" />
            <TypingAnimation text="devMoney" className="text-3xl" />
          </span>
        </div>
        <div className=" flex gap-1 items-center">
          <Link
            href={""}
            className="bg-background text-foreground text-sm py-1 px-3 content-center  hover:text-secondary-foreground"
          >
            <ShinyButton className="hidden md:flex md:gap-2 items-center">
              Nova transação
            </ShinyButton>

            <ShinyButton className="md:hidden p-3">
              <BsDatabaseAdd />
            </ShinyButton>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
