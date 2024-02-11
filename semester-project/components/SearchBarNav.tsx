"use client";
import React, { useRef, useState, useEffect } from "react";
import { fetchGraphQL } from "@/utils/networking/contentfulFetch";
import Link from "next/link";

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

interface Product {
  title: string;
  category: string;

}

function SearchBarNav() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchReults, setSearchResults] = useState<Product[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = `
	query {
		productCollection(where: { title_contains: "${e.target.value}" }) {
			items {
				title
				category
			}
		}
		}
	`;
    if (e.target.value !== "") {
      fetchData(query);
    } else {
      setSearchResults([]);
    }
  };


  const fetchData = async (query: string) => {

    try {
      const response = await fetchGraphQL(query, space_id, access_token);
      const data = await response.json();
      setSearchResults(data.data.productCollection.items);
    } catch (error) {
      console.log("Error fetching Contentful data:", error);
    } 
  };

  return (
    <div className="hidden md:flex lg:flex  items-center justify-evenly  shrink-5 relative">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        placeholder="Search..."
        className="font-sans px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm w-32 lg:w-64 xl:w-80"
      />
      {searchReults.length > 0 && (
        <div className="absolute w-full bg-white max-h-64 h-content top-full z-10 rounded-sm overflow-y-auto text-black">
          {searchReults.map((product, index) => (
            <Link
              onClick={() => {
                if (inputRef.current !== null) {
                  inputRef.current.value = "";
                }
                setSearchResults([]);
              }}
              href={`/products/${product.category}/${product.title
                .trim()
                .replaceAll(" ", "-")}`}
              key={index}
            >
              <div className="font-sans text-sm my-1" key={index}>
                {product.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBarNav;
