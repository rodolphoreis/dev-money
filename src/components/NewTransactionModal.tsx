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
import { FaSearchDollar } from "react-icons/fa";
import { ComboboxDemo } from "./ui/ComboboxDemo";

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
          <ComboboxDemo />
          <Button type="submit" className="flex gap-2 mt-3 w-full">
            <span className="text-xs hidden md:inline-block ">Cadastrar</span>{" "}
            <FaSearchDollar size={20} />
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
