import z from 'zod';

export const categoriaSchema = z.object({
  nome: z.string().min(1, { message: "O nome é obrigatório" }).max(50, { error: "Categoria deve conter no maximo 50 caracteres" }),
  descricao: z.string().max(100, "Máximo 100 caracteres").optional(),
  ativo: z.boolean().default(true),
});

export type CategoriaSchema = z.infer<typeof categoriaSchema>;