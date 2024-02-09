"use client";
import { useState, useEffect } from "react";
import ItemSplash from "@/components/ItemSplash";
import { useContext } from "@/context/context";
import Spinner from "@/components/Spinner";

import { fetchGraphQL } from "@/utils/networking/contentfulFetch";

require("dotenv").config();

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

interface Category {
  title: string;
  image: {
    id: number;
    title: string;
    description: string;
    contentType: string;
    url: string;
  };
}

export default function Page() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { isLoading, setIsLoading } = useContext();

  if (typeof window !== "undefined") {
    document.title = "GymRoo - Products";
  }
  const query = `
    query {
      categoryCollection {
        items {
          sys {
            id
          }
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();
        setCategories(data.data.categoryCollection.items);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <Spinner />

      {isLoading
        ? ""
        : categories.map((category, i) => (
            <ItemSplash
              key={i}
              image={category.image.url}
              title={category.title}
              i={i}
              link={"/products/" + category.title.toLowerCase()}
            />
          ))}
    </div>
  );
}
