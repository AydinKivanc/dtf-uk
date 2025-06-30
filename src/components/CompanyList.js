export default function CompanyList({ companies, onSelectCompany, selectedCompany }) {
  const sortedCompanies = [...companies].sort((a, b) => 
    a.firmaAdi.localeCompare(b.firmaAdi, 'tr')
  )

  const getCompanyTags = (company) => {
    const tags = []
    if (company.isMakina) tags.push('Makina')
    if (company.isSarf) tags.push('Sarf')
    if (company.isMaterials) tags.push('Materyal')
    return tags
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Firmalar ({sortedCompanies.length})
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedCompanies.map((company) => (
          <div
            key={company.id}
            onClick={() => onSelectCompany(company)}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedCompany?.id === company.id
                ? 'bg-blue-50 border-blue-300'
                : 'hover:bg-gray-50 border-gray-200'
            }`}
          >
            <div>
              <h4 className="font-medium text-gray-900 mb-1">
                {company.firmaAdi}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                {company.city}
              </p>
              <div className="flex flex-wrap gap-1">
                {getCompanyTags(company).map((tag, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs rounded-full ${
                      tag === 'Makina' ? 'bg-blue-100 text-blue-800' :
                      tag === 'Sarf' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}