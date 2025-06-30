import { Calendar, MapPin, ExternalLink, Globe } from 'lucide-react'

export default function Fuarlar() {
  const ukFairs = [
    {
      id: 1,
      name: "Sign & Digital UK (SDUK)",
      date: "23-25 Şubat 2025",
      location: "NEC, Birmingham",
      content: "Geniş format baskı, tekstil baskı, DTF ve DTG yazıcılar, mürekkepler, ısı pres makineleri ve transfer materyalleri",
      website: "https://www.signuk.com",
      featured: true
    },
    {
      id: 2,
      name: "Packaging Innovations & Empack UK",
      date: "12-13 Şubat 2025",
      location: "NEC, Birmingham",
      content: "Dijital baskı, ürün ambalaj baskı teknolojileri; yazıcılar, mürekkepler, filmler ve baskı çözümleri",
      website: "https://www.packagingbirmingham.com"
    },
    {
      id: 3,
      name: "The Print Show",
      date: "23-25 Eylül 2025",
      location: "NEC, Birmingham",
      content: "Dijital, tekstil ve ticari baskı; DTG/DTF yazıcılar, lazer kesim, UV baskı sistemleri ve sarf malzemeleri",
      website: "https://www.theprintshow.co.uk"
    }
  ]

  const europeanFairs = [
    {
      id: 1,
      name: "FESPA Global Print Expo 2025",
      date: "6-9 Mayıs 2025",
      location: "Berlin, Almanya (Messe Berlin)",
      content: "Geniş format baskı, DTG/DTF, tekstil baskı sistemleri, mürekkep ve film üreticileri",
      website: "https://www.fespaglobalprintexpo.com",
      featured: true
    }
  ]

  const FairCard = ({ fair, isEuropean = false }) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 ${
      fair.featured ? 'ring-2 ring-blue-500' : ''
    }`}>
      {fair.featured && (
        <div className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-3">
          Öne Çıkan Fuar
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{fair.name}</h3>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm">{fair.date}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-red-500" />
          <span className="text-sm">{fair.location}</span>
        </div>
        
        {isEuropean && (
          <div className="flex items-center text-gray-600">
            <Globe className="w-4 h-4 mr-2 text-green-500" />
            <span className="text-sm font-medium">Avrupa Etkinliği</span>
          </div>
        )}
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">İçerik:</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{fair.content}</p>
      </div>
      
      <a
        href={fair.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
      >
        <ExternalLink className="w-4 h-4 mr-1" />
        Web Sitesi
      </a>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">DTF/DTG İlgili Fuarlar</h1>
      
      {/* UK Fairs */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">UK</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            UK DTF/DTG İlgili Fuarları (2025)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ukFairs.map((fair) => (
            <FairCard key={fair.id} fair={fair} />
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">UK Fuarları Hakkında</h3>
          <p className="text-blue-800 text-sm">
            UK&apos;deki tüm major fuarlar NEC Birmingham&apos;da düzenlenmektedir. Bu fuarlar DTF/DTG 
            teknolojileri, sarf malzemeleri ve ilgili ekipmanlar için en önemli buluşma noktalarıdır.
          </p>
        </div>
      </div>

      {/* European Fairs */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">EU</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Avrupa&apos;daki Önemli Etkinlikler
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {europeanFairs.map((fair) => (
            <FairCard key={fair.id} fair={fair} isEuropean={true} />
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">FESPA Hakkında</h3>
          <p className="text-green-800 text-sm">
            FESPA Global Print Expo, Avrupa&apos;nın en büyük dijital baskı ve tekstil baskı fuarıdır. 
            DTF/DTG teknolojileri için en kapsamlı ürün ve teknoloji sergisini sunar.
          </p>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">2025 Fuar Özeti</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">Toplam Fuar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">UK Fuarı</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">1</div>
            <div className="text-sm text-gray-600">Avrupa Fuarı</div>
          </div>
        </div>
      </div>
    </div>
  )
}