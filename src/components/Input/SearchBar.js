import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-10 py-2 border rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
