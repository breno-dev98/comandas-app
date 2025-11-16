"use client";
import Link from "next/link";
import { ArrowLeft, Moon } from "lucide-react";

export function MesaHeader({ mesa }: { mesa: string }) {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-[F8F9FB]">
      <div className="flex items-center gap-3">
        <Link href="/dashboard">
          <ArrowLeft className="p-2 rounded-md text-black hover:bg-cyan-100 transition" size={35} />
        </Link>
        <h1 className="text-2xl font-semibold text-cyan-600">Mesa {mesa}</h1>
      </div>

      <Moon size={20} className="text-gray-700" />
    </header>
  );
}
