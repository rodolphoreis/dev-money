"use client";
import { Header } from "@/components/Header";
import { InputSearch } from "@/components/InputSearch";
import { Summary } from "@/components/Summary";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import DevMoneyContextProvider from "../../context/devMoneyContext";
import { useState } from "react";
import { TableMoney } from "@/components/TableMoney";

export default function Home() {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setInputSearch(value);
  };

  return (
    <DevMoneyContextProvider>
      <div>
        <Header />
        <VelocityScroll
          text="devMoney"
          default_velocity={5}
          className="text-3xl md:text-5xl opacity-5 flex gap-4 my-1 font-semibold"
        />
        <Summary />
        <InputSearch onSearchChange={handleSearchChange} />
        <TableMoney inputSearch={inputSearch} />
      </div>
    </DevMoneyContextProvider>
  );
}
