"use client";
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import SearchResults from '../../components/SearchResults/SearchResults'
import Title from '../../components/Title/Title';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      fetch( `${process.env.NEXT_PUBLIC_API_BASE_URL}/job/api/AllSearch/?search=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="container mx-auto px-4">
        <div className="m-4">
          <div className="flex justify-between items-center">
            <Title text="검색 하기" />
          </div>
          <Search onSearch={handleSearch} />
          <SearchResults results={searchResults} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;