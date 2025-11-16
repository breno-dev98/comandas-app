"use client";

import { MesaHeader } from "@/components/mesas/MesaHeader";

export default async function MesaLayout({ children, params }: { children: React.ReactNode; params: Promise<{ numero: string }> }) {
  const {numero} = await params;

  return (
    <div className="space-y-4">
      <MesaHeader mesa={numero} />

      <main className="p-4">{children}</main>
    </div>
  );
}
