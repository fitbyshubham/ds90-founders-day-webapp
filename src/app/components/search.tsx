"use client";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("Start your search");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User entered:", query);
  };

  const handleFocus = () => {
    setPlaceholder(""); 
  };

  const handleBlur = () => {
    if (!query) setPlaceholder("Start your search"); 
  };

  return (
    <div className="w-60">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center border border-gray-300 rounded-full shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="search"
            className="w-4 h-4 opacity-60 ml-2"
          />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="flex-1 px-3 py-1 outline-none text-gray-700 placeholder-gray-400 rounded-r-full"
          />
        </div>
      </form>
    </div>
  );
}
