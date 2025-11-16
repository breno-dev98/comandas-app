"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="w-full bg-[#F9F8FB] flex items-center justify-between mb-8 border px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">Comanda<span className="text-black">Pro</span></h1>
      </div>

      <Button variant="outline" onClick={() => signOut({redirect: true, redirectTo: "/auth"})} className="flex items-center gap-2">
        <LogOut size={18} />
        Sair
      </Button>
    </header>
  );
}
