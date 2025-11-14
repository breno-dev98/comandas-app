import { prisma } from "@/lib/prisma";
import { categoriaSchema } from "@/validators/categoriaSchema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const categoriaId = Number(id);

    if (isNaN(categoriaId)) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }
    const body = await request.json();

    if (!categoriaId) {
      return NextResponse.json({ error: "ID é obrigatório para atualização." }, { status: 400 });
    }

    const partialSchema = categoriaSchema.partial();
    const result = partialSchema.safeParse(body);

    if (!result.success) {
      const formattedErrors = z.treeifyError(result.error);
      return NextResponse.json({ errors: formattedErrors }, { status: 400 });
    }

    const categoriaExistente = await prisma.categorias.findUnique({
      where: { id: categoriaId },
    });

    if (!categoriaExistente) {
      return NextResponse.json({ error: "Categoria não encontrada." }, { status: 404 });
    }

    if (result.data.nome && result.data.nome !== categoriaExistente.nome) {
      const nomeDuplicado = await prisma.categorias.findFirst({
        where: {
          nome: { equals: result.data.nome, mode: "insensitive" },
          NOT: { id: categoriaId },
        },
      });

      if (nomeDuplicado) {
        return NextResponse.json({ error: "Já existe uma categoria com esse nome." }, { status: 409 });
      }
    }

    const categoriaAtualizada = await prisma.categorias.update({
      where: { id: categoriaId },
      data: result.data,
      select: {
        id: true,
        nome: true,
        descricao: true,
        ativo: true,
      },
    });

    return NextResponse.json(categoriaAtualizada, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar categoria", error);
    return NextResponse.json({ error: "Erro ao atualizar categoria" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const categoriaId = Number(id);

    if (isNaN(categoriaId)) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    const categoria = await prisma.categorias.findUnique({ where: { id: categoriaId } });
    if (!categoria) {
      return NextResponse.json({ error: "Categoria não encontrada." }, { status: 404 });
    }

    await prisma.categorias.delete({ where: { id: categoriaId } });

    return NextResponse.json({ message: "Categoria excluída com sucesso." }, { status: 200 });
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    return NextResponse.json({ error: "Erro ao excluir categoria." }, { status: 500 });
  }
}
