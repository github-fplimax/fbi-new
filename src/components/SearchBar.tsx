"use client";

import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchBarData } from "@/data/SearchBarData";
import Link from "next/link";

interface SearchItem {
  id: number;
  title: string;
  category: string;
  url: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [showSearchBar, setShowSearchBar] = useState(false); // State untuk menunjukkan apakah search bar harus ditampilkan
  const [showModal, setShowModal] = useState(false); // State untuk menunjukkan apakah modal harus ditampilkan
  const [notFound, setNotFound] = useState(false); // State untuk menunjukkan apakah hasil pencarian tidak ditemukan

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setNotFound(false); // Reset state jika user mulai mengetik kembali
  };

  const performSearch = () => {
    const results = SearchBarData.filter((search) =>
      search.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    if (results.length > 0) {
      setShowModal(true); // Tampilkan modal jika hasil pencarian ditemukan
      setShowSearchBar(false); // Sembunyikan search bar saat menampilkan hasil pencarian
    } else {
      setNotFound(true); // Tampilkan pesan jika hasil pencarian kosong
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSearchTerm(""); // Clear search term
    setShowSearchBar(true); // Tampilkan kembali search bar saat modal ditutup
  };

  return (
    <aside className="sidebar">
      <div className="flex flex-row justify-between">
        {showSearchBar && (
          <div className="search-bar transition-all z-50 flex flex-row">
            <input
              type="text"
              className="border rounded-lg float-left border-gray-600 w-full md:w-auto"
              placeholder="  Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        )}
        <button
          className="transition-all"
          onClick={() => setShowSearchBar(!showSearchBar)}
        >
          <MagnifyingGlass size={25} />
        </button>
      </div>
      <div className="categories hidden md:block">
        <ul className="capitalize flex flex-col gap-y-2 pt-2">
          {notFound && (
            <li className="text-red-500">Keyword yang dicari tidak ada</li>
          )}
        </ul>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay pt-80 z-50">
          <div className="modal">
            <div className="modal-header">
              <h3>Search Result</h3>
              <button onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <ul>
                {searchResults.map((result) => (
                  <li
                    className="hover:text-green-500 capitalize transition-all"
                    key={result.id}
                  >
                    <Link href={result.url} title={result.title}>{result.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                className="bg-[#252525] hover:bg-green-500 transition-all text-white py-1 px-2 rounded-md focus:outline-none capitalize flex justify-end items-end"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default SearchBar;
