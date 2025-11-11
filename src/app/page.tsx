import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col bg-linear-to-b from-white to-gray-100">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
