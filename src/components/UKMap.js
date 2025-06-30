'use client'

import { useState } from 'react'

export default function UKMap({ getCityCompanyCount, focusAddress, onClearFocus, showCities = true }) {
  const [selectedCity, setSelectedCity] = useState(null)
  
  const cities = [
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Manchester', lat: 53.4808, lng: -2.2426 },
    { name: 'Birmingham', lat: 52.4862, lng: -1.8904 },
    { name: 'Leeds', lat: 53.8008, lng: -1.5491 },
    { name: 'Glasgow', lat: 55.8642, lng: -4.2518 },
    { name: 'Liverpool', lat: 53.4084, lng: -2.9916 },
    { name: 'Newcastle', lat: 54.9783, lng: -1.6178 },
    { name: 'Bristol', lat: 51.4545, lng: -2.5879 },
    { name: 'Sheffield', lat: 53.3811, lng: -1.4701 },
    { name: 'Nottingham', lat: 52.9548, lng: -1.1581 },
    { name: 'Leicester', lat: 52.6369, lng: -1.1398 },
    { name: 'Coventry', lat: 52.4068, lng: -1.5197 },
    { name: 'Hull', lat: 53.7676, lng: -0.3274 },
    { name: 'Bradford', lat: 53.7960, lng: -1.7594 },
    { name: 'Cardiff', lat: 51.4816, lng: -3.1791 },
    { name: 'Belfast', lat: 54.5973, lng: -5.9301 },
    { name: 'Edinburgh', lat: 55.9533, lng: -3.1883 },
    { name: 'Stoke-on-Trent', lat: 53.0027, lng: -2.1794 },
    { name: 'Wolverhampton', lat: 52.5862, lng: -2.1282 },
    { name: 'Plymouth', lat: 50.3755, lng: -4.1427 },
    { name: 'Derby', lat: 52.9225, lng: -1.4746 },
    { name: 'Southampton', lat: 50.9097, lng: -1.4044 },
    { name: 'Portsmouth', lat: 50.8198, lng: -1.0880 },
    { name: 'York', lat: 53.9600, lng: -1.0873 },
    { name: 'Reading', lat: 51.4543, lng: -0.9781 }
  ]

  const handleCityClick = (city) => {
    setSelectedCity(city)
    // Firma adresi odaklanmasını temizle
    if (onClearFocus) {
      onClearFocus()
    }
  }

  const getMapUrl = () => {
    let baseUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432668.5336829615!2d-7.69235!3d54.7877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!"
    
    // Önce firma adresi kontrolü
    if (focusAddress) {
      const encodedAddress = encodeURIComponent(focusAddress.address + ", " + focusAddress.city + ", UK")
      return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    }
    
    // Sonra şehir kontrolü
    if (selectedCity) {
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${selectedCity.lng}!3d${selectedCity.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(selectedCity.name)}!5e0!3m2!1sen!2str!4v1735378800000!5m2!1sen!2str`
    }
    
    return baseUrl + "1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2str!4v1735378800000!5m2!1sen!2str"
  }

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4">
        UK Haritası
        {focusAddress && (
          <span className="text-sm font-normal text-green-600 ml-2">
            - {focusAddress.firmaAdi} adresi gösteriliyor
          </span>
        )}
        {!focusAddress && selectedCity && (
          <span className="text-sm font-normal text-blue-600 ml-2">
            - {selectedCity.name} seçili
          </span>
        )}
      </h3>
      
      {showCities && (
        <div className="grid grid-cols-6 gap-2 mb-6">
          {cities.map((city, index) => {
            const count = getCityCompanyCount(city.name)
            const isSelected = selectedCity?.name === city.name
            return (
              <div 
                key={index}
                onClick={() => handleCityClick(city)}
                className={`text-center p-2 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:shadow-md ${
                  isSelected 
                    ? 'bg-blue-100 border-2 border-blue-500 shadow-md' 
                    : 'bg-gray-50 hover:bg-blue-50 border-2 border-transparent hover:border-blue-200'
                }`}
              >
                <div className={`font-medium text-sm transition-colors ${
                  isSelected ? 'text-blue-800' : 'text-gray-800 hover:text-blue-700'
                }`}>
                  {city.name}
                </div>
                <div className={`text-lg font-bold transition-colors ${
                  isSelected ? 'text-blue-700' : 'text-blue-600 hover:text-blue-800'
                }`}>
                  {count}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {focusAddress && (
        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-green-800 font-medium">
                🏢 {focusAddress.firmaAdi}
              </div>
              <div className="text-green-600 text-sm">
                📍 {focusAddress.address}, {focusAddress.city}
              </div>
            </div>
            <button
              onClick={() => onClearFocus && onClearFocus()}
              className="text-green-600 hover:text-green-800 text-sm underline"
            >
              Temizle
            </button>
          </div>
        </div>
      )}

      {!focusAddress && selectedCity && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex justify-between items-center">
            <span className="text-blue-800 font-medium">
              📍 {selectedCity.name} haritada gösteriliyor
            </span>
            <button
              onClick={() => setSelectedCity(null)}
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              Temizle
            </button>
          </div>
        </div>
      )}

      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          key={focusAddress?.id || selectedCity?.name || 'default'}
          src={getMapUrl()}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  )
}