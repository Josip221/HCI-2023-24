"use client";
import ItemCard from "@/components/ItemCard";
import ItemSplash from "@/components/ItemSplash";
import SearchBar from "@/components/Search";
import { useState, useEffect } from "react";
import React from "react";

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

function Page({ params }: pageProps) {
  const [categories, setCategories] = useState<Category>({
    title: "",
    image: { title: "", description: "", contentType: "", url: "" },
  });

  const query = `
  query {
      productCollection {
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

  const [products, setProducts] = useState([]);
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
        const response = await fetchGraphQL(query);
        const data = await response.json();
        setProducts(data.data.productCollection.items);
        setCategories(data.data.categoryCollection.items[0]);
        return data;
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
        return null;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {categories && (
        <ItemSplash
          image={categories.image.url}
          i={1}
          title={categories.title}
        />
      )}
      <SearchBar placeholder="Search..." onChange={() => {}} />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ItemCard
          image="https://m.media-amazon.com/images/I/716EUYPGSGL._AC_SL1500_.jpg"
          title="IPF Weight Plates"
          weight={20}
          price={499}
        />
        <ItemCard
          image="https://m.media-amazon.com/images/I/716EUYPGSGL._AC_SL1500_.jpg"
          title="IPF Weight Plates"
          weight={20}
          price={499}
        />
        <ItemCard
          image="https://m.media-amazon.com/images/I/716EUYPGSGL._AC_SL1500_.jpg"
          title="IPF Weight Plates"
          weight={20}
          price={499}
        />
        <ItemCard
          image="https://m.media-amazon.com/images/I/716EUYPGSGL._AC_SL1500_.jpg"
          title="IPF Weight Plates"
          weight={20}
          price={499}
        />
        <ItemCard
          image="https://m.media-amazon.com/images/I/716EUYPGSGL._AC_SL1500_.jpg"
          title="IPF Weight Plates"
          weight={20}
          price={499}
        />
        <ItemCard
          image="https://m.media-amazon.com/images/I/716EUYPGSGL._AC_SL1500_.jpg"
          title="IPF Weight Plates"
          weight={20}
          price={499}
        />
      </div>
    </div>
  );
}

export default Page;
