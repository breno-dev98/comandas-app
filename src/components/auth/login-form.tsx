"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { LoginSchema, loginSchema } from "@/validators/loginSchema";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

    const onSubmit = async (data: LoginSchema) => {
      setIsLoading(true);
      setErrorMsg("");

      const result = await signIn("credentials", {
        redirect: false,
        redirectTo: "/dashboard",
        email: data.email,
        password: data.password,
      });

      setIsLoading(false);

      if (result?.error) {
        setErrorMsg("Credenciais inválidas ou usuário inativo.");
        return;
      }

      router.push("/dashboard");
    };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Form {...form}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Acessar"}
        </Button>
      </Form>
    </form>
  );
}
