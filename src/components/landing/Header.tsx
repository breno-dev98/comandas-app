"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Comanda<span className="text-gray-800">Pro</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#beneficios" className="text-gray-600 hover:text-blue-600 transition">
            Benefícios
          </Link>
          <Link href="#sobre" className="text-gray-600 hover:text-blue-600 transition">
            Sobre
          </Link>
          <Link href="/auth">
            <Button>Entrar</Button>
          </Link>
        </nav>

        {/* Menu mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-600 hover:text-blue-600">
          <Menu size={24} />
        </button>
      </div>

      {/* Dropdown mobile */}
      {open && (
        <div className="md:hidden bg-white border-t flex flex-col items-center gap-3 py-4">
          <Link href="#beneficios" onClick={() => setOpen(false)}>
            Benefícios
          </Link>
          <Link href="#sobre" onClick={() => setOpen(false)}>
            Sobre
          </Link>
          <Link href="/public/login" onClick={() => setOpen(false)}>
            <Button size="sm">Entrar</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
