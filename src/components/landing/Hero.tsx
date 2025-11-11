"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

export function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className="flex flex-col-reverse min-h-screen md:flex-row items-center justify-center gap-8 px-6 py-20 max-w-6xl mx-auto text-center md:text-left">
      {/* Texto */}
      <motion.div className="flex-1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Gerencie suas <span className="text-blue-600">Comandas</span> com rapidez e praticidade
        </h1>
        <p className="text-gray-600 text-lg mb-8">Um sistema moderno, online e fácil de usar para bares, restaurantes e eventos.</p>
        <Link href="/auth">
          <Button size="lg" className="px-6 py-3 text-lg">
            Acessar Sistema
          </Button>
        </Link>
      </motion.div>

      {/* Imagem */}
      {!isMobile && (
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/undraw_mobile-apps_p0aa.svg" alt="Sistema de comandas" width={500} height={400} priority className="max-w-full h-auto" />
        </motion.div>
      )}
    </section>
  );
}
