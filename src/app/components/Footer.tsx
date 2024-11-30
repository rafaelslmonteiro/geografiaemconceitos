import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Geografia em Conceitos. Todos os direitos reservados.
          </p>
          <div className="mt-2">
            <Link href="/sobre" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

