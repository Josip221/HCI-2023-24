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

function SearchBarNav({ hidden = true }: { hidden?: boolean }) {
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
    <div
      className={`${
        hidden ? "hidden" : ""
      } md:flex lg:flex  items-center justify-evenly  shrink-5 relative`}
    >
      <div className="relative">
        <input
          ref={inputRef}
          onChange={handleInputChange}
          type="text"
          placeholder="Search..."
          className="font-sans px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm w-32 lg:w-64 xl:w-80"
        />
        <div
          className="absolute top-0 right-0 h-full w-5 mr-1 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg==')`,
          }}
        ></div>
      </div>
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
