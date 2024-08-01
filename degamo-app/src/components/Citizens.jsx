import React, { useState, useEffect } from 'react'
import Citizen from './Citizen'
import SearchFilter from './SearchFilter'

const Citizens = () => {
  const initialCitizens = [
    { id: 1, name: 'Jhonry', age: 25, address: 'Tulay', status: 'Active' },
    {
      id: 2,
      name: 'Kean Jane',
      age: 30,
      address: 'Tungkil',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Egas Bananas',
      age: 35,
      address: 'Bacay',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Shan Milby',
      age: 40,
      address: 'Ward 2',
      status: 'Inactive',
    },
    { id: 5, name: 'Jhonry', age: 45, address: 'Ward 4', status: 'Active' },
    {
      id: 6,
      name: 'Kean Jane',
      age: 50,
      address: 'Calajoan',
      status: 'Inactive',
    },
    {
      id: 7,
      name: 'Egas Bananas',
      age: 55,
      address: 'Tunghaan',
      status: 'Active',
    },
    { id: 8, name: 'Shan Milby', age: 60, address: 'Naga', status: 'Inactive' },
    {
      id: 9,
      name: 'Jhonry',
      age: 65,
      address: 'San Fernando',
      status: 'Active',
    },
    { id: 10, name: 'Kean Jane', age: 70, address: 'Carcar', status: 'Active' },
  ]

  const [citizens, setCitizens] = useState(initialCitizens)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens)

  const toggleStatus = id => {
    setCitizens(
      citizens.map(citizen =>
        citizen.id === id
          ? {
              ...citizen,
              status: citizen.status === 'Active' ? 'Inactive' : 'Active',
            }
          : citizen
      )
    )
  }

  const filterCitizens = query => {
    setFilteredCitizens(
      citizens.filter(citizen =>
        citizen.name.toLowerCase().includes(query.toLowerCase())
      )
    )
  }

  useEffect(() => {
    filterCitizens(searchQuery)
  }, [searchQuery, citizens])

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul>
        {filteredCitizens.map((citizen, index) => (
          <Citizen key={index} citizen={citizen} toggleStatus={toggleStatus} />
        ))}
      </ul>
    </div>
  )
}

export default Citizens
