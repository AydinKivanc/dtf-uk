'use client'

import { useState, useEffect, useRef } from 'react'
import UKMap from '@/components/UKMap'
import CompanyList from '@/components/CompanyList'
import CompanyDetail from '@/components/CompanyDetail'

export default function Firmalar() {
  const [companies, setCompanies] = useState([])
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [mapFocusAddress, setMapFocusAddress] = useState(null)
  const mapRef = useRef(null)
  const [filters, setFilters] = useState({
    isMakina: false,
    isSarf: false,
    isMaterials: false,
    diger: false
  })

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setCompanies(data)
        setFilteredCompanies(data)
      })
  }, [])

  useEffect(() => {
    if (!filters.isMakina && !filters.isSarf && !filters.isMaterials && !filters.diger) {
      setFilteredCompanies(companies)
    } else {
      const filtered = companies.filter(company => 
        (filters.isMakina && company.isMakina) ||
        (filters.isSarf && company.isSarf) ||
        (filters.isMaterials && company.isMaterials) ||
        (filters.diger && !company.isMakina && !company.isSarf && !company.isMaterials)
      )
      setFilteredCompanies(filtered)
    }
  }, [filters, companies])

  const handleFilterChange = (filterType) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }))
  }

  const getCityCompanyCount = (city) => {
    return filteredCompanies.filter(company => 
      company.city && company.city.toLowerCase() === city.toLowerCase()
    ).length
  }

  const handleShowOnMap = (company) => {
    setMapFocusAddress(company)
    // Haritaya scroll yapalım
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">UK DTF Firmaları</h1>
      
      {/* Filtreler - En üstte */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Filtreler</h3>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.isMakina}
              onChange={() => handleFilterChange('isMakina')}
              className="w-4 h-4 text-blue-600"
            />
            <span>Makina</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.isSarf}
              onChange={() => handleFilterChange('isSarf')}
              className="w-4 h-4 text-blue-600"
            />
            <span>Sarf Malzeme</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.isMaterials}
              onChange={() => handleFilterChange('isMaterials')}
              className="w-4 h-4 text-blue-600"
            />
            <span>Baskı Materyalleri</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.diger}
              onChange={() => handleFilterChange('diger')}
              className="w-4 h-4 text-blue-600"
            />
            <span>Diğer</span>
          </label>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <strong>{filteredCompanies.length}</strong> firma gösteriliyor
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Harita */}
          <div ref={mapRef} className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <UKMap 
              getCityCompanyCount={getCityCompanyCount} 
              focusAddress={mapFocusAddress}
              onClearFocus={() => setMapFocusAddress(null)}
              showCities={false}
            />
          </div>
          
          {/* Firma Listesi */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <CompanyList 
              companies={filteredCompanies}
              onSelectCompany={setSelectedCompany}
              selectedCompany={selectedCompany}
            />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          {/* Şehir Dağılımı - Sağ tarafta */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-4">UK Şehir Dağılımı</h3>
            <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
              {[
                'London', 'Redditch', 'Manchester', 'Sheffield', 'Reading', 'Portsmouth', 
                'Derby', 'Luton', 'Wolverhampton', 'Glasgow', 'Bordon', 'Blackburn',
                'Sutton Coldfield', 'Rugeley', 'Deeside', 'Macclesfield', 'Livingston',
                'Caerphilly', 'Wrexham', 'Birmingham', 'Leeds', 'Liverpool', 'Newcastle',
                'Bristol', 'Nottingham', 'Leicester', 'Coventry', 'Hull', 'Bradford',
                'Cardiff', 'Belfast', 'Edinburgh', 'Stoke-on-Trent', 'Plymouth',
                'Southampton', 'York'
              ].filter(city => getCityCompanyCount(city) > 0)
              .map(cityName => ({
                name: cityName,
                count: getCityCompanyCount(cityName)
              }))
              .sort((a, b) => b.count - a.count)
              .map((city, index) => {
                return (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <span className="font-medium text-sm text-gray-800">
                      {city.name}
                    </span>
                    <span className="text-lg font-bold text-blue-600">
                      {city.count}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {selectedCompany && (
            <CompanyDetail 
              company={selectedCompany} 
              onClose={() => setSelectedCompany(null)}
              onShowOnMap={handleShowOnMap}
            />
          )}
        </div>
      </div>
    </div>
  )
}