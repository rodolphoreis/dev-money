import { BsCurrencyEuro } from "react-icons/bs";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

export function Summary() {
  return (
    <section className="w-full   content-center mt-8 md:mt-14 mx-auto ">
      <div className="w-full max-w-[1120px] items-center justify-around md:justify-between flex  mx-auto ">
        <div className="border px-4 py-4 md:p-4 md:min-w-52 rounded-md gap-3 text-start">
          <header className="flex gap-2 justify-between mb-2 md:mb-5 ">
            <span className="font-extrabold text-xs md:text-base">
              Entradas
            </span>
            <FaRegArrowAltCircleUp size={18} color="green" />
          </header>
          <strong className="text-lg md:text-2xl">232,50€</strong>
        </div>
        <div className="border px-4 py-4 md:p-4 md:min-w-52 rounded-md gap-3 text-start">
          <header className="flex justify-between mb-2 md:mb-5 ">
            <span className="font-extrabold text-xs md:text-base">Saídas</span>
            <FaRegArrowAltCircleDown size={18} color="red" />
          </header>
          <strong className="text-lg md:text-2xl">132,50€</strong>
        </div>
        <div className="border px-4 py-4 md:p-4 md:min-w-52 rounded-md gap-3 text-start">
          <header className="flex justify-between mb-2 md:mb-5 ">
            <span className="font-extrabold text-xs md:text-base">Total</span>
            <BsCurrencyEuro size={18} />
          </header>
          <strong className="text-lg md:text-2xl w-full">532,50€</strong>
        </div>
      </div>
    </section>
  );
}
