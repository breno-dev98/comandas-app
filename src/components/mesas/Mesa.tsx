"use client";

import { ComandaGrid } from "../comanda/ComandaGrid";
import { Button } from "../ui/button";

interface Comanda {
  id: number;
  mesa: number;
  itens: any[];
}

interface MesaProps {
  comandas: Comanda[];
}

export function Mesa({ comandas }: MesaProps) {
  return (
    <div className="text-lg">
      <div className="flex justify-between">
        <p className="font-semibold">
          Comandas Abertas ({comandas.length})
        </p>
        <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-400">+ Nova Comanda</Button>
      </div>
      <ComandaGrid />
    </div>
  );
}
