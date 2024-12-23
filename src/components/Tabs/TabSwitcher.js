import React from 'react';

const TabSwitcher = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => setActiveTab('users')}
        className={`px-6 py-2 rounded-lg border-2 ${
          activeTab === 'users' 
            ? 'border-blue-500 text-blue-500' 
            : 'border-gray-300 text-gray-700 hover:border-gray-400'
        }`}
      >
        Users
      </button>
      <button
        onClick={() => setActiveTab('books')}
        className={`px-6 py-2 rounded-lg border-2 ${
          activeTab === 'books' 
            ? 'border-blue-500 text-blue-500' 
            : 'border-gray-300 text-gray-700 hover:border-gray-400'
        }`}
      >
        Books
      </button>
    </div>
  );
};

export default TabSwitcher;