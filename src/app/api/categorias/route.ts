import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { categoriaSchema } from "@/validators/categoriaSchema";
import z from "zod";

export async function GET() {
  try {
    const categorias = await prisma.categorias.findMany();
    return NextResponse.json(categorias, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar categorias", error);
    return NextResponse.json({ error: "Erro ao buscar categorias" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const isValid = categoriaSchema.safeParse(body);

    if (!isValid.success) {
      const formattedErrors = z.treeifyError(isValid.error);
      return NextResponse.json({ errors: formattedErrors }, { status: 400 });
    }

    const { nome, descricao, ativo } = isValid.data;

    const categoriaExistente = await prisma.categorias.findFirst({
      where: {
        nome: {
          equals: nome,
          mode: "insensitive",
        },
      },
    });
      
      if (categoriaExistente) {
        return NextResponse.json(
          { error: "Já existe uma categoria com esse nome." },
          { status: 409 }
        );
      }

    const novaCategoria = await prisma.categorias.create({
      data: {
        nome,
        descricao,
        ativo: ativo ?? true,
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        ativo: true,
      },
    });

    return NextResponse.json(novaCategoria, { status: 201 });
  } catch (error) {
    console.error("Erro ao cadastrar categoria", error);
    return NextResponse.json({ error: "Erro ao cadastrar categoria" }, { status: 500 });
  }
}
