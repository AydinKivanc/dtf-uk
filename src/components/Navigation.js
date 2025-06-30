import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            DTF-UK
          </Link>
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Anasayfa
            </Link>
            <Link 
              href="/firmalar" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Firmalar
            </Link>
            <Link 
              href="/piyasa" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Piyasa
            </Link>
            <Link 
              href="/fuarlar" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Fuarlar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}