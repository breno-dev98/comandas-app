import { DashboardCard } from "./DashboardCard";
import { Table, FileBarChart, DollarSign, ShoppingCart } from "lucide-react";

export function DashboardGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
      <DashboardCard title={0} description="Faturamento Atual" icon={<DollarSign className="text-green-500" size={20} />} />

      <DashboardCard title={0} description="Comandas Abertas" icon={<ShoppingCart className="text-cyan-500" size={20} />} />

      <DashboardCard title={0} description="Mesas Ocupadas" icon={<Table color="orange" size={20} />} />

      <DashboardCard title={0} description="Itens Vendidos" icon={<FileBarChart className="text-green-500" size={20} />} />
    </div>
  );
}
