// app/protected/dashboard/page.tsx
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth");
  }

  return (
    <div className="p-8">
      <header className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p>Bem-vindo ao painel, {session.user.name}!</p>
          <p className="text-sm text-gray-500">Função: {session.user.role}</p>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button className="cursor-pointer" variant={"outline"} type="submit">
            Desconectar
          </Button>
        </form>
      </header>
    </div>
  );
}
