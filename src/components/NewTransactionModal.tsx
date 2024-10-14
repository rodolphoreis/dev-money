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

export function NewTransactionModal() {
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Você tem certeza absoluta?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Input type="text" placeholder="Descrição" className="mb-3" />
          <Input type="text" placeholder="Preço" className="mb-3" />
          <Input type="text" placeholder="Categoria" className="mb-3" />

          <div className="flex gap-3 mb-5">
            <Button type="button" className="flex gap-2 mt-3 w-full">
              <FaRegArrowAltCircleUp size={18} color="green" />
              <span className="text-xs ">Entrada</span>{" "}
            </Button>
            <Button type="button" className="flex gap-2 mt-3 w-full">
              <FaRegArrowAltCircleDown size={18} color="red" />
              <span className="text-xs ">Saída</span>{" "}
            </Button>
          </div>

          <Button type="submit" className="flex gap-2 mt-3 w-full">
            <span className="text-xs  ">Cadastrar</span>{" "}
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
