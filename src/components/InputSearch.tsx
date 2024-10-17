"use client";

import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { FaSearchDollar } from "react-icons/fa";
import { DevMoneyContext } from "../../context/devMoneyContext";

export function InputSearch() {
  const { transactions } = useContext(DevMoneyContext);
  const [inputSearch, setInputSearch] = useState("");

  const filteredTransitions = transactions.filter((item) => {
    const searchTerm = inputSearch.trim().toLowerCase();
    const description = item.description.trim().toLowerCase();
    const category = item.category.trim().toLowerCase();

    return description.includes(searchTerm) || category.includes(searchTerm);
  });

  console.log(filteredTransitions);

  return (
    <section className="w-full   content-center mt-8 md:mt-14 mx-auto ">
      <div className="w-full max-w-[1120px] items-center justify-around md:justify-between flex  mx-auto gap-1 md:gap-4">
        <Input
          value={inputSearch}
          name="inputSearch"
          type="text"
          placeholder="Busque uma transação"
          className="w-[80%] md:flex-1"
          onChange={(event) => setInputSearch(event.target.value)}
        />
        <Button type="submit" className="flex gap-2">
          <span className="text-xs hidden md:inline-block">Buscar</span>{" "}
          <FaSearchDollar size={20} />
        </Button>
      </div>
    </section>
  );
}
