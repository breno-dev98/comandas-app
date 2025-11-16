"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

interface DashboardCardProps {
  title: number;
  description: string;
  icon: React.ReactNode;
}

export function DashboardCard({ title, description, icon }: DashboardCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader className="flex justify-between">
        <CardDescription className="text-muted-foreground font-medium text-sm">{description}</CardDescription>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardContent>
    </Card>
  );
}
