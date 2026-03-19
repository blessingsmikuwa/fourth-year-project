import React, { useState } from 'react';

const Schools = () => {
  // Sample data based on the image
  const initialSchools = [
    {
      id: 1,
      name: 'Blantyre Secondary School',
      district: 'Blantyre',
      type: 'Public',
      students: '1,243',
      teachers: 48,
      enrolled: 'Jan 2025',
    },
    {
      id: 2,
      name: 'Kamuzu Academy',
      district: 'Kasungu',
      type: 'Private',
      students: '876',
      teachers: 62,
      enrolled: 'Mar 2025',
    },
    {
      id: 3,
      name: "St. Patrick's Secondary",
      district: 'Mzuzu',
      type: 'Public',
      students: '654',
      teachers: 31,
      enrolled: 'Jun 2025',
    },
    {
      id: 4,
      name: 'Lilongwe Girls Secondary',
      district: 'Lilongwe',
      type: 'Public',
      students: '932',
      teachers: 44,
      enrolled: 'Sep 2025',
    },
  ];

  const [schools] = useState(initialSchools);
  const [searchTerm, setSearchTerm] = useState('');
  const [districtFilter, setDistrictFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  // Get unique districts and types for filter dropdowns
  const districts = ['All', ...new Set(schools.map((s) => s.district))];
  const types = ['All', ...new Set(schools.map((s) => s.type))];

  // Filter schools based on search, district, and type
  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = districtFilter === 'All' || school.district === districtFilter;
    const matchesType = typeFilter === 'All' || school.type === typeFilter;

    return matchesSearch && matchesDistrict && matchesType;
  });

  // Handlers
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleDistrictChange = (e) => setDistrictFilter(e.target.value);
  const handleTypeChange = (e) => setTypeFilter(e.target.value);
  const handleView = (schoolName) => alert(`View details for: ${schoolName}`);
  const handleSchoolButtonClick = () => alert('School button clicked!');

  return (
    <div className="p-6 min-h-screen font-sans" style={{ backgroundColor: '#0d1117' }}>
      {/* Top bar: Search + Filters + School Button */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search schools by name or district..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1 min-w-[250px] px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors"
          style={{ 
            backgroundColor: '#161b22',
            borderColor: '#21262d',
            color: '#e6edf3',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
          onFocus={(e) => e.target.style.borderColor = '#388bfd'}
          onBlur={(e) => e.target.style.borderColor = '#21262d'}
        />

        {/* District filter */}
        <select
          value={districtFilter}
          onChange={handleDistrictChange}
          className="px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors"
          style={{ 
            backgroundColor: '#161b22',
            borderColor: '#21262d',
            color: '#e6edf3',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          {districts.map((d) => (
            <option key={d} value={d} style={{ backgroundColor: '#161b22', color: '#e6edf3' }}>
              {d === 'All' ? 'All Districts' : d}
            </option>
          ))}
        </select>

        {/* Type filter */}
        <select
          value={typeFilter}
          onChange={handleTypeChange}
          className="px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors"
          style={{ 
            backgroundColor: '#161b22',
            borderColor: '#21262d',
            color: '#e6edf3',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          {types.map((t) => (
            <option key={t} value={t} style={{ backgroundColor: '#161b22', color: '#e6edf3' }}>
              {t === 'All' ? 'All Types' : t}
            </option>
          ))}
        </select>

        {/* School button */}
        <button
          onClick={handleSchoolButtonClick}
          className="px-6 py-2 font-medium rounded-lg shadow hover:opacity-90 focus:outline-none focus:ring-2 transition-colors"
          style={{ 
            backgroundColor: '#2ea043',
            color: '#e6edf3'
          }}
        >
          School
        </button>
      </div>

      {/* Schools Table */}
      <div className="overflow-x-auto rounded-lg shadow" style={{ backgroundColor: '#161b22' }}>
        <table className="min-w-full table-auto border-collapse">
          <thead style={{ backgroundColor: '#1c2330', borderBottom: '1px solid #21262d' }}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#8b949e' }}>
                School Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#8b949e' }}>
                District
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#8b949e' }}>
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#8b949e' }}>
                Students
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#8b949e' }}>
                Teachers
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#8b949e' }}>
                Enrolled
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#8b949e' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#21262d' }}>
            {filteredSchools.map((school) => (
              <tr 
                key={school.id} 
                className="transition-colors hover:bg-opacity-50" 
                style={{ backgroundColor: '#161b22', '--hover-bg': '#1c2330' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1c2330'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#161b22'}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#e6edf3' }}>
                  {school.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#8b949e' }}>
                  {school.district}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#8b949e' }}>
                  {school.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#8b949e' }}>
                  {school.students}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#8b949e' }}>
                  {school.teachers}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#8b949e' }}>
                  {school.enrolled}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => handleView(school.name)}
                    className="font-medium hover:underline focus:outline-none transition-colors"
                    style={{ color: '#388bfd' }}
                    onMouseEnter={(e) => e.target.style.color = '#2ea043'}
                    onMouseLeave={(e) => e.target.style.color = '#388bfd'}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* No results message */}
        {filteredSchools.length === 0 && (
          <div className="px-6 py-8 text-center" style={{ color: '#6e7681' }}>
            No schools found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Schools;