"use client";

import { Receipt } from "lucide-react";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export function ComandaCard() {
  return (
    <Card className="cursor-pointer">
      <CardHeader className="flex justify-between">
        <CardTitle>Comanda #{Math.floor(Math.random() * (18999 - 60000) + 99999)}</CardTitle>
        <Receipt className="text-cyan-400" size={20}/>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm">Items:</p>
          <p>0</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-muted-foreground font-semibold">Total:</h1>
          <h1 className="text-green-500 font-semibold">R$ 0.00</h1>
        </div>
      </CardContent>
      <CardFooter>
        <CardAction className="w-full">
          <Button className="w-full bg-border cursor-pointer hover:bg-cyan-500" variant={"outline"}>Ver Comanda</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
