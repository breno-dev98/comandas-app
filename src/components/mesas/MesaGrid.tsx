'use client'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MesaCard } from "./MesaCard";

export function MesaGrid() {
  const mesas = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Mesas</CardTitle>
      </CardHeader>

      <CardContent className="my-0">
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
          {mesas.length > 0 ? mesas.map((mesa) => (
            <MesaCard key={mesa} numero={mesa} />
          )) : (
              <div className="flex justify-center items">
                <p>Nenhuma mesa cadastrada</p>
              </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
