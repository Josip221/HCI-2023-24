"use client";
import { useState, useEffect } from "react";
import ItemSplash from "@/components/ItemSplash";
import { useContext } from "@/context/context";
import Spinner from "@/components/Spinner";

require("dotenv").config();

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const query = `
query {
  categoryCollection {
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

interface Category {
  title: string;
  image: {
    title: string;
    description: string;
    contentType: string;
    url: string;
  };
}

export default function Page() {
  const [categories, setCategories] = useState<Category[]>([]);
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
      setIsLoading(true);
      try {
        const response = await fetchGraphQL(query);
        const data = await response.json();
        setCategories(data.data.categoryCollection.items);
        setIsLoading(false);
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
