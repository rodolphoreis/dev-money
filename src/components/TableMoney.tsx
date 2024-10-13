import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function TableMoney() {
  return (
    <section className="w-full   content-center mt-4 md:mt-6 mx-auto ">
      <div className="w-full max-w-[1120px] items-center justify-around md:justify-between flex  mx-auto ">
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
    </section>
  );
}
