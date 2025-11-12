import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "../validators/loginSchema";
import bcrypt from "bcryptjs";
import { comparePassword } from "@/utils/bcryptHelper";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await loginSchema.parseAsync(credentials);

          const user = await prisma.user.findUnique({ where: { email } });

          if (!user) {
            throw new Error("Usuário não encontrado");
          }

          if (!user.password) {
            throw new Error("Usuário cadastrado via OAuth não possui senha.");
          }

          const isValid = await comparePassword(password, user.password);

          if (!isValid) {
            throw new Error("Senha incorreta");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            isActive: user.isActive,
          };
        } catch (error) {
          console.error("Erro na autenticação:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.isActive = user.isActive;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.isActive = token.isActive;
      }
      return session;
    },
  },
});
