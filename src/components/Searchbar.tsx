"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Listbox, ListboxItem, Input, useDisclosure } from "@nextui-org/react";
import { getSearchResult } from "./action"; // Adjust the import as needed
import SearchModal from "./bigModal/SearchModal";
interface SearchResult {
  index: number;
  reviews?: string[];
  tag: string;
  title: string;
  writer: string;
  content: string;
  date: string;
  image: string;
}

const Searchbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
    null
  );

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 1) {
      const searchResult = await getSearchResult(value);
      setResults(searchResult);
    } else {
      setResults([]);
    }
  }

  function handleResultClick(result: SearchResult) {
    setSelectedResult(result);
    onOpen();
  }

  return (
    <div className="relative">
      <Input
        classNames={{
          base: "w-[220px] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="필기 검색"
        size="sm"
        startContent={<IoMdSearch size={18} />}
        type="search"
        value={searchTerm}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <div className="absolute z-10 w-[300px] bg-white shadow-lg mt-2 rounded-lg">
          <Listbox
            classNames={{
              base: "max-w-xs",
              list: "max-h-[300px] overflow-scroll",
            }}
          >
            {results.map((result) => (
              <ListboxItem
                key={result.index}
                className="p-4 border-b last:border-b-0"
                onClick={() => handleResultClick(result)}
              >
                <div className="font-bold text-wrap">{result.title || ""}</div>

                <div className="text-sm">
                  {result.content || "검색 결과 없음"}
                </div>
                <div className="text-sm text-gray-500">
                  {result.writer || "익명"}
                </div>
                <div className="text-xs text-gray-400">
                  {new Date(result.date).toLocaleString()}
                </div>
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      )}
      {selectedResult && (
        <SearchModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          data={selectedResult}
        />
      )}
    </div>
  );
};

export default Searchbar;
