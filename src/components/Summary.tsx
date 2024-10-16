"use client";
import { BsCurrencyEuro } from "react-icons/bs";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import ShinyButton from "./ui/shiny-button";
import { DevMoneyContext } from "../../context/devMoneyContext";
import { useContext } from "react";

export function Summary() {
  const { totalEntryIntoTheAccount, totalExits, total } =
    useContext(DevMoneyContext);

  return (
    <section className="w-full   content-center mt-8 md:mt-14 mx-auto ">
      <div className="w-full max-w-[1120px] items-center justify-around md:justify-between flex  mx-auto ">
        <ShinyButton className=" px-4 py-4 md:p-4 md:min-w-52 rounded-md gap-3 text-start">
          <header className="flex gap-2 justify-between mb-2 md:mb-5 ">
            <span className="font-extrabold text-xs md:text-base">
              Entradas
            </span>
            <FaRegArrowAltCircleUp size={18} color="green" />
          </header>
          <strong className="text-lg md:text-2xl">
            {totalEntryIntoTheAccount}€
          </strong>
        </ShinyButton>
        <ShinyButton className=" px-4 py-4 md:p-4 md:min-w-52 rounded-md gap-3 text-start">
          <header className="flex justify-between mb-2 md:mb-5 gap-2">
            <span className="font-extrabold text-xs md:text-base">Saídas</span>
            <FaRegArrowAltCircleDown size={18} color="red" />
          </header>
          <strong className="text-lg md:text-2xl">{totalExits}€</strong>
        </ShinyButton>
        <ShinyButton className=" px-4 py-4 md:p-4 md:min-w-52 rounded-md gap-3 text-start">
          <header className="flex justify-between mb-2 md:mb-5 ">
            <span className="font-extrabold text-xs md:text-base">Total</span>
            <BsCurrencyEuro size={18} />
          </header>
          <strong className="text-lg md:text-2xl w-full">
            {total.toFixed(2)}€
          </strong>
        </ShinyButton>
      </div>
    </section>
  );
}
