import React from 'react'

const SearchGerbang = ({onSearch}) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search"
        className="border p-2 rounded w-full"
        //value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchGerbang