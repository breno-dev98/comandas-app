"use client";

import { Mesa } from "@/components/mesas/Mesa";

export default function MesaPage({ params }: { params: { id: string } }) {
  const mesaNumero = Number(params.id);

const comandasMock = [
  { id: 1, mesa: mesaNumero, itens: [1, 2, 3] },
  { id: 2, mesa: mesaNumero, itens: [1, 2, 3, 4, 5] },
];


  return <Mesa comandas={comandasMock} />;
}
