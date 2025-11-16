// app/protected/dashboard/page.tsx
import { DashboardGrid } from "@/components/dashboard/DashboardGrid";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MesaGrid } from "@/components/mesas/MesaGrid";

export default async function DashboardPage() {

  return (
    <div>
      <DashboardHeader />
      <div className="px-4 space-y-8">
        <DashboardGrid />
        <MesaGrid />
      </div>
    </div>
  );
}
