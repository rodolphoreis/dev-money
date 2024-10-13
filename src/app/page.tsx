import { Header } from "@/components/Header";
import { InputSearch } from "@/components/InputSearch";
import { Summary } from "@/components/Summary";
import { TableMoney } from "@/components/TableMoney";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  return (
    <div>
      <Header />
      <VelocityScroll
        text="devMoney"
        default_velocity={5}
        className="text-3xl md:text-5xl opacity-5 flex gap-4 my-1 font-semibold"
      />
      <Summary />
      <InputSearch />
      <TableMoney />
    </div>
  );
}
