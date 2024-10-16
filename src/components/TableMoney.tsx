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
import Image from "next/image";
import { useContext } from "react";
import { DevMoneyContext } from "../../context/devMoneyContext";

export function TableMoney() {
  const { transitions } = useContext(DevMoneyContext);

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
              <TableHead className="md:w-[10%] text-xs md:text-sm text-zinc-500">
                Data
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transitions &&
              transitions.map((transition) => (
                <TableRow key={transition.id}>
                  <TableCell className="font-medium text-xs md:text-sm">
                    {transition.description}
                  </TableCell>
                  <TableCell
                    className={`text-left text-xs md:text-sm ${
                      transition.type === "entrada"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {transition.amount}
                  </TableCell>
                  <TableCell className="text-xs md:text-sm">
                    {transition.category}
                  </TableCell>
                  <TableCell className="text-xs md:text-sm">
                    {transition.createdAt}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden w-full max-w-[1120px] items-center  flex flex-col gap-4 mx-auto ">
        {transitions &&
          transitions.map((transition) => (
            <Card className="w-[95%] " key={transition.id}>
              <CardHeader>
                <CardTitle> {transition.description}</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-left text-sm ${
                    transition.type === "entrada"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {transition.amount}€
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
                  <span>{transition.category}</span>
                </CardDescription>
                <CardDescription className="flex items-center gap-2">
                  <Image
                    src="/calendar.svg"
                    alt="icone de calendario"
                    width={20}
                    height={20}
                  ></Image>
                  <span>{transition.createdAt}</span>
                </CardDescription>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}
