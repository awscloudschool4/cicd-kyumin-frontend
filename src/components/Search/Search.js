
import React, { useState } from 'react';

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex w-full p-4 bg-gray-100 rounded-lg shadow">
            <input
                type="text"
                placeholder="검색..."
                className="flex-grow p-2 mr-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                onClick={handleSearchClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
                검색
            </button>
        </div>
    );
}

export default Search;
