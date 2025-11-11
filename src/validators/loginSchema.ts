import z from 'zod';

export const loginSchema = z.object({
    email: z.email({ message: "Endereço de e-mail inválido" }),
    password: z.string().min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;