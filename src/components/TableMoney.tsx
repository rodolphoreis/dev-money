"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaRegTrashAlt } from "react-icons/fa";

import Image from "next/image";
import { useContext } from "react";
import { DevMoneyContext } from "../../context/devMoneyContext";
import axios from "axios";
import { priceFormatter } from "@/utils/formatter";

function handleDelete(id: string) {
  axios
    .delete(`http://localhost:3001/transactions/${id}`)
    .then((response) => {
      if (response.status === 200) {
        window.location.reload();
      }
    })
    .catch((error) => {
      console.error("Erro ao excluir a transação:", error);
    });
}

export function TableMoney() {
  const { transactions } = useContext(DevMoneyContext);

  return (
    <section className="w-full   content-center mt-4 md:mt-6 mx-auto ">
      <div className="hidden md:flex w-full max-w-[1120px] items-center justify-around md:justify-between   mx-auto ">
        <Table>
          <TableCaption className="mt-20">
            Uma lista dos seus gastos recentes.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-zinc-100">
              <TableHead className="md:w-[50%] text-xs md:text-sm text-zinc-500">
                Descrição
              </TableHead>
              <TableHead className="md:w-[20%] text-xs md:text-sm text-zinc-500">
                Valor
              </TableHead>
              <TableHead className="md:w-[20%] text-xs md:text-sm text-zinc-500">
                Categoria
              </TableHead>
              <TableHead className="md:w-[5%] text-xs md:text-sm text-zinc-500">
                Data
              </TableHead>
              <TableHead className="md:w-[5%] text-xs md:text-sm text-zinc-500 ">
                Deletar
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions &&
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium text-xs md:text-sm">
                    {transaction.description}
                  </TableCell>
                  <TableCell
                    className={`text-left text-xs md:text-sm ${
                      transaction.type === "entrada"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "saida" && "- "}
                    {priceFormatter.format(transaction.amount)}
                  </TableCell>
                  <TableCell className="text-xs md:text-sm">
                    {transaction.category}
                  </TableCell>
                  <TableCell className="text-xs md:text-sm">
                    {transaction.createdAt}
                  </TableCell>
                  <TableCell className=" flex text-xs md:text-sm content-center justify-center items-center">
                    <FaRegTrashAlt
                      onClick={() => handleDelete(transaction.id)}
                      size={18}
                      color="red"
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden w-full max-w-[1120px] items-center  flex flex-col gap-4 mx-auto ">
        {transactions &&
          transactions.map((transaction) => (
            <Card className="w-[95%] " key={transaction.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle> {transaction.description}</CardTitle>
                  <FaRegTrashAlt
                    onClick={() => handleDelete(transaction.id)}
                    size={18}
                    color="red"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-left text-sm ${
                    transaction.type === "entrada"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {Number(transaction.amount).toFixed(2)}€
                </p>
              </CardContent>
              <div className="flex justify-between px-6 mb-5">
                <CardDescription className="flex items-center gap-2">
                  <Image
                    src="/saleIcon.svg"
                    alt="icone de dinheiro"
                    width={20}
                    height={20}
                  ></Image>
                  <span>{transaction.category}</span>
                </CardDescription>
                <CardDescription className="flex items-center gap-2">
                  <Image
                    src="/calendar.svg"
                    alt="icone de calendario"
                    width={20}
                    height={20}
                  ></Image>
                  <span>{transaction.createdAt}</span>
                </CardDescription>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}
