export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-8 text-center text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <p>© {new Date().getFullYear()} ComandaPro. Todos os direitos reservados.</p>

        <div className="flex gap-4">
          <a href="#politica" className="hover:text-blue-600">
            Política de Privacidade
          </a>
          <a href="#termos" className="hover:text-blue-600">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
