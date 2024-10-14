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

export function TableMoney() {
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
            <TableRow>
              <TableCell className="font-medium text-xs md:text-sm">
                Hambúrguer
              </TableCell>
              <TableCell className="text-left text-xs md:text-sm">
                - 34,00
              </TableCell>
              <TableCell className="text-xs md:text-sm">Alimentação</TableCell>
              <TableCell className="text-xs md:text-sm">2024-10-10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-xs md:text-sm">
                Aluguel
              </TableCell>
              <TableCell className="text-left text-xs md:text-sm">
                - 850,00
              </TableCell>
              <TableCell className="text-xs md:text-sm">Casa</TableCell>
              <TableCell className="text-xs md:text-sm">2024-10-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-xs md:text-sm">
                Salário
              </TableCell>
              <TableCell className="text-left text-xs md:text-sm">
                2000,00
              </TableCell>
              <TableCell className="text-xs md:text-sm">Salário</TableCell>
              <TableCell className="text-xs md:text-sm">2024-10-05</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden w-full max-w-[1120px] items-center  flex flex-col gap-4 mx-auto ">
        <Card className="w-[95%] ">
          <CardHeader>
            <CardTitle> Desenvolvimento de site</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-600">2000.00€</p>
          </CardContent>
          <div className="flex justify-between px-6 mb-5">
            <CardDescription className="flex items-center gap-2">
              <Image
                src="/saleIcon.svg"
                alt="icone de dinheiro"
                width={20}
                height={20}
              ></Image>
              <span>Venda</span>
            </CardDescription>
            <CardDescription className="flex items-center gap-2">
              <Image
                src="/calendar.svg"
                alt="icone de calendario"
                width={20}
                height={20}
              ></Image>
              <span>01/10/2024</span>
            </CardDescription>
          </div>
        </Card>
        <Card className="w-[95%] ">
          <CardHeader>
            <CardTitle> Hamburguer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">- 57.00€</p>
          </CardContent>
          <div className="flex justify-between px-6 mb-5">
            <CardDescription className="flex items-center gap-2">
              <Image
                src="/saleIcon.svg"
                alt="icone de dinheiro"
                width={20}
                height={20}
              ></Image>
              <span>Alimentação</span>
            </CardDescription>
            <CardDescription className="flex items-center gap-2">
              <Image
                src="/calendar.svg"
                alt="icone de calendario"
                width={20}
                height={20}
              ></Image>
              <span>12/10/2024</span>
            </CardDescription>
          </div>
        </Card>
      </div>
    </section>
  );
}
