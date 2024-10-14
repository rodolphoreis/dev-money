import { RiMoneyEuroCircleFill } from "react-icons/ri";

import { ModeToggle } from "./ModeToggle";
import TypingAnimation from "./ui/typing-animation";

import { NewTransactionModal } from "./NewTransactionModal";

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
        <div className=" flex gap-1 md:gap-3 items-center">
          <NewTransactionModal />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
