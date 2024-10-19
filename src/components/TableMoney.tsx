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
import { dateFormatter, priceFormatter } from "@/utils/formatter";

interface TableMoneyProps {
  inputSearch: string;
}

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

const normalizeString = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export function TableMoney({ inputSearch }: TableMoneyProps) {
  const { transactions } = useContext(DevMoneyContext);

  const filteredTransactions = transactions.filter((transaction) => {
    const searchTerm = inputSearch ? normalizeString(inputSearch.trim()) : "";
    const description = normalizeString(transaction.description.trim());
    const category = normalizeString(transaction.category.trim());

    return description.includes(searchTerm) || category.includes(searchTerm);
  });

  return (
    <section className="w-full content-center mt-4 md:mt-6 mx-auto ">
      <div className="hidden md:flex w-full max-w-[1120px] items-center justify-around md:justify-between mx-auto ">
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
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
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
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </TableCell>
                  <TableCell className="flex text-xs md:text-sm content-center justify-center items-center">
                    <FaRegTrashAlt
                      onClick={() => handleDelete(transaction.id)}
                      size={18}
                      color="red"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Nenhuma transação encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden w-full max-w-[1120px] items-center flex flex-col gap-4 mx-auto ">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <Card className="w-[95%] " key={transaction.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{transaction.description}</CardTitle>
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
                  {priceFormatter.format(transaction.amount)}
                </p>
              </CardContent>
              <div className="flex justify-between px-6 mb-5">
                <CardDescription className="flex items-center gap-2">
                  <Image
                    src="/saleIcon.svg"
                    alt="icone de dinheiro"
                    width={20}
                    height={20}
                  />
                  <span>{transaction.category}</span>
                </CardDescription>
                <CardDescription className="flex items-center gap-2">
                  <Image
                    src="/calendar.svg"
                    alt="icone de calendario"
                    width={20}
                    height={20}
                  />
                  <span>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </span>
                </CardDescription>
              </div>
            </Card>
          ))
        ) : (
          <Card className="w-[95%]">
            <CardContent>
              <p className="text-center">Nenhuma transação encontrada.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
