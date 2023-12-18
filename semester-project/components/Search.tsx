import React from "react";

interface SearchBarProps {
  placeholder: string;
  onChange: (value: string) => void;
}
const SearchBar = ({ placeholder, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-64 m-5">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full px-4 py-2 border rounded-md outline-none focus:border-blue-500 transition-all duration-300"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <button className="absolute top-0 right-0 px-3 py-2 bg-[#007bff] text-white rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22 22l-5-5M15 11h5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
