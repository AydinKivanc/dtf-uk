import { X, ExternalLink, MapPin, Monitor } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import ImageModal from './ImageModal'

export default function CompanyDetail({ company, onClose, onShowOnMap }) {
  const [selectedImage, setSelectedImage] = useState(null)
  if (!company) return null

  const getCompanyTags = (company) => {
    const tags = []
    if (company.isMakina) tags.push('Makina')
    if (company.isSarf) tags.push('Sarf Malzeme')
    if (company.isMaterials) tags.push('Baskı Materyalleri')
    return tags
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Firma Detayları
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">
            {company.firmaAdi}
          </h4>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {getCompanyTags(company).map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full ${
                  tag === 'Makina' ? 'bg-blue-100 text-blue-800' :
                  tag === 'Sarf Malzeme' ? 'bg-green-100 text-green-800' :
                  'bg-orange-100 text-orange-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {company.webPage && (
            <a
              href={company.webPage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm mb-2"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Web Sitesi
            </a>
          )}
        </div>

        <div>
          <div className="flex items-start text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-medium">{company.city}</div>
              <div className="mb-2">{company.address}</div>
              <button
                onClick={() => onShowOnMap && onShowOnMap(company)}
                className="text-blue-600 hover:text-blue-800 text-xs underline flex items-center"
              >
                <MapPin className="w-3 h-3 mr-1" />
                Haritada Göster
              </button>
            </div>
          </div>
        </div>

        {company.faaliyetAlanlari && company.faaliyetAlanlari.length > 0 && (
          <div>
            <h5 className="font-medium text-gray-900 mb-2">
              Faaliyet Alanları
            </h5>
            <ul className="space-y-1 text-sm text-gray-600">
              {company.faaliyetAlanlari.map((alan, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {alan}
                </li>
              ))}
            </ul>
          </div>
        )}

        {company.not && (
          <div className="bg-gray-50 p-3 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-1">
              Notlar
            </h5>
            <p className="text-sm text-gray-600">
              {company.not}
            </p>
          </div>
        )}

        {company.makinalar && company.makinalar.length > 0 && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-2 flex items-center">
              <Monitor className="w-4 h-4 mr-1" />
              Makinalar
            </h5>
            <ul className="space-y-1 text-sm text-gray-700">
              {company.makinalar.map((makina, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {makina}
                </li>
              ))}
            </ul>
          </div>
        )}

        {company.makine_pictures && company.makine_pictures.length > 0 && (
          <div>
            <h5 className="font-medium text-gray-900 mb-2">
              Makine Resimleri
            </h5>
            <div className="grid grid-cols-2 gap-2">
              {company.makine_pictures.map((picture, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(`/images/printers/${picture}`)}
                >
                  <Image
                    src={`/images/printers/${picture}`}
                    alt={`${company.firmaAdi} makine ${index + 1}`}
                    width={120}
                    height={90}
                    className="w-full h-20 object-cover rounded-lg border"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ''}
        alt={`${company.firmaAdi} makine`}
      />
    </div>
  )
}