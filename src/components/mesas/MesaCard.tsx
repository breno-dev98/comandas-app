'use client'
import { Table } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export function MesaCard({numero}: {numero: number}) {
    return (
        <Link href={`/mesa/${numero}`}>
            <Card className="cursor-pointer bg-muted hover:bg-cyan-100 py-8">
                <CardHeader className="text-center">
                    <Table className="mx-auto" size={18}/>
                    <CardTitle>
                        Mesa {numero}
                    </CardTitle>
                </CardHeader>
            </Card>
        </Link>
    )
}