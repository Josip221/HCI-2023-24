"use client";
import ItemCard from "@/components/ItemCard";
import ItemSplash from "@/components/ItemSplash";
import SearchBar from "@/components/Search";
import { useState, useEffect } from "react";
import React from "react";
import { useContext } from "@/context/context";
import Spinner from "@/components/Spinner";

require("dotenv").config();

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

interface pageProps {
  params: {
    category: string;
  };
}
interface Category {
  title: string;
  image: {
    title: string;
    description: string;
    contentType: string;
    url: string;
  };
}

interface Product {
  title: string;
  image: {
    title: string;
    description: string;
    contentType: string;
    url: string;
  };
  weight: number;
  price: number;
}

function Page({ params }: pageProps) {
  const [categories, setCategories] = useState<Category>({
    title: "",
    image: { title: "", description: "", contentType: "", url: "" },
  });

  const query = `
  query {
      productCollection(where: {category: "${
        params.category
      }" }, order: [price_ASC]) {
        items {
          sys {
            id
          }
          title
          price
          weight
          image {
            title
            description
            contentType
            url
          }
        }
      }
      categoryCollection(where: { title: "${
        params.category[0].toUpperCase() + params.category.slice(1)
      }" }) {
        items {
          title
          image {
            title
            description
            contentType
            url
          }
        }
      }
    }
`;

  const [products, setProducts] = useState<Product[]>([]);
  const { isLoading, setIsLoading } = useContext();
  async function fetchGraphQL(query: string) {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({ query }),
      }
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGraphQL(query);
        const data = await response.json();
        setProducts(data.data.productCollection.items);
        setCategories(data.data.categoryCollection.items[0]);
        setIsLoading(false);
        console.log("Contentful data:", data);
        return data;
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching Contentful data:", error);
        return null;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <Spinner />
      {isLoading || (
        <>
          {categories && (
            <ItemSplash
              image={categories.image.url}
              i={1}
              title={categories.title}
              style="object-bottom"
            />
          )}
          <SearchBar placeholder="Search..." onChange={() => {}} />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ItemCard
                key={index}
                image={product.image.url}
                title={product.title}
                weight={product.weight}
                price={product.price}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
