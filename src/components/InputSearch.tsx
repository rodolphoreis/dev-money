import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { FaSearchDollar } from "react-icons/fa";

export function InputSearch() {
  return (
    <section className="w-full   content-center mt-8 md:mt-14 mx-auto ">
      <div className="w-full max-w-[1120px] items-center justify-around md:justify-between flex  mx-auto gap-1 md:gap-4">
        <Input
          type="text"
          placeholder="Busque uma transação"
          className="w-[80%] md:flex-1"
        />
        <Button type="submit" className="flex gap-2">
          <span className="text-xs hidden md:inline-block">Buscar</span>{" "}
          <FaSearchDollar size={20} />
        </Button>
      </div>
    </section>
  );
}
