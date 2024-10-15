"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { BsDatabaseAdd } from "react-icons/bs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { useState } from "react";

export function NewTransactionModal() {
  const [selectedValue, setSelectedValue] = useState("entrada");

  function handlesetSelectedValue(value: string) {
    setSelectedValue(value);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="hidden border rounded-lg px-4 py-2 md:flex md:gap-3 items-center">
          Nova transação
        </div>
        <div className="md:hidden p-3">
          <BsDatabaseAdd />
        </div>
      </DialogTrigger>
      <form action="">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Você tem certeza absoluta?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <Input type="text" placeholder="Descrição" className="mb-3" />
            <Input type="text" placeholder="Preço" className="mb-3" />
            <Input type="text" placeholder="Categoria" className="mb-3" />

            <div className="flex gap-3 mb-5">
              <button
                type="button"
                className={`flex gap-2 h-10 mt-3 bg-zinc-900 rounded-lg w-full items-center justify-center border-4 ${
                  selectedValue === "entrada"
                    ? "bg-green-800 dark:bg-green-900 border-green-500"
                    : "border-transparent"
                }`}
                onClick={() => handlesetSelectedValue("entrada")}
              >
                <FaRegArrowAltCircleUp size={18} color="green" />
                <span className="text-xs font-bold text-white">
                  Entrada
                </span>{" "}
              </button>
              <button
                type="button"
                className={`flex gap-2 h-10 mt-3 bg-zinc-900 rounded-lg w-full items-center justify-center border-4 ${
                  selectedValue === "saida"
                    ? "bg-red-600 dark:bg-red-800 border-red-500"
                    : "border-transparent"
                }`}
                onClick={() => handlesetSelectedValue("saida")}
              >
                <FaRegArrowAltCircleDown size={18} color="red" />
                <span className="text-xs font-bold text-white">Saída</span>{" "}
              </button>
            </div>

            <Button type="submit" className="flex gap-2 mt-3 w-full">
              <span className="text-xs  ">Cadastrar</span>{" "}
            </Button>
          </DialogDescription>
        </DialogContent>
      </form>
    </Dialog>
  );
}
