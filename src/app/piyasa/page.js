export default function Piyasa() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">DTF Makineleri Pazarı</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Statistics */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pazar İstatistikleri</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">UK Direct to Film (DTF) Baskı Pazarı</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">2025 Pazar Büyüklüğü:</span>
                  <span className="font-semibold text-blue-700">192 milyon USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Büyüme Oranı (2026-2030):</span>
                  <span className="font-semibold text-green-600">%5.3 yıllık ortalama</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">2030 Projeksiyonu:</span>
                  <span className="font-semibold text-blue-700">249 milyon USD</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">UK Dijital Tekstil Baskı Pazarı</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">2024 Büyüklüğü:</span>
                  <span className="font-semibold text-green-700">383 milyon USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">2030 Projeksiyonu:</span>
                  <span className="font-semibold text-green-700">737 milyon USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CAGR:</span>
                  <span className="font-semibold text-green-600">%12</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Avrupa DTF Pazarı</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">2025 Büyüklüğü:</span>
                  <span className="font-semibold text-orange-700">1.043 milyar USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">2030 Projeksiyonu:</span>
                  <span className="font-semibold text-orange-700">1.316 milyar USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CAGR:</span>
                  <span className="font-semibold text-orange-600">%4.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">UK Payı:</span>
                  <span className="font-semibold text-orange-700">~%18</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Pricing & Analysis */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Ekipman Fiyatlandırması</h2>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">UK&apos;de DTF Makine Giriş Maliyetleri</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-medium text-gray-900">Profesyonel Giriş Seviyesi</div>
                    <div className="text-sm text-gray-600">Başlangıç modelleri</div>
                  </div>
                  <div className="text-lg font-bold text-purple-600">£6,000+</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-medium text-gray-900">Endüstriyel Modeller</div>
                    <div className="text-sm text-gray-600">Roll-to-roll/hibrit modeller</div>
                  </div>
                  <div className="text-lg font-bold text-purple-600">£35,000&apos;e kadar</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Pazar Analizi</h2>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Veriler, UK pazarında DTF makineleri ve baskı ekipmanları için 
                <span className="font-semibold text-indigo-700"> orta-yüksek seviyede </span>
                bir talep olduğunu ve 
                <span className="font-semibold text-indigo-700"> yükseliş trendinin </span>
                devam ettiğini göstermektedir.
              </p>
              
              <div className="mt-4 p-3 bg-white rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Önemli Noktalar:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dijital tekstil baskı pazarı güçlü büyüme gösteriyor (%12 CAGR)</li>
                  <li>• DTF segmenti istikrarlı büyüme trendi sergiliyor (%5.3 CAGR)</li>
                  <li>• UK, Avrupa pazarının %18&apos;ini temsil ediyor</li>
                  <li>• Giriş seviyesinden endüstriyel seviyeye geniş ürün yelpazesi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}