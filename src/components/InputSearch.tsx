"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaSearchDollar } from "react-icons/fa";

interface InputSearchProps {
  onSearchChange: (value: string) => void;
}

export function InputSearch({ onSearchChange }: InputSearchProps) {
  const [inputSearch, setInputSearch] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSearch(value);
    onSearchChange(value);
  };

  return (
    <section className="w-full content-center mt-8 md:mt-14 mx-auto">
      <div className="w-full max-w-[1120px] items-center justify-around md:justify-between flex mx-auto gap-1 md:gap-4">
        <Input
          value={inputSearch}
          name="inputSearch"
          type="text"
          placeholder="Busque uma transação"
          className="w-[80%] md:flex-1"
          onChange={handleInputChange}
        />
        <Button type="submit" className="flex gap-2">
          <span className="text-xs hidden md:inline-block">Buscar</span>{" "}
          <FaSearchDollar size={20} />
        </Button>
      </div>
    </section>
  );
}
