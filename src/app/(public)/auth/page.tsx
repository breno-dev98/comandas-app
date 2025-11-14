import { LoginForm } from "@/components/auth/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-center">Acesse sua conta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Login Form */}
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
