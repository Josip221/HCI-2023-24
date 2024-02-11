"use client";
import ItemCard from "@/components/ItemCard";
import ItemSplash from "@/components/ItemSplash";
import { useState, useEffect } from "react";
import React from "react";
import { useContext } from "@/context/context";
import Spinner from "@/components/Spinner";
import { fetchGraphQL } from "@/utils/networking/contentfulFetch";

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
  if (typeof window !== "undefined") {
    document.title =
      "GymRoo - " + params.category[0].toUpperCase() + params.category.slice(1);
  }

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

  const [products, setProducts] = useState<Product[]>([]);
  const { isLoading, setIsLoading } = useContext();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();

        setProducts(data.data.productCollection.items);
        setCategories(data.data.categoryCollection.items[0]);
      } catch (error) {
        console.log("Error fetching Contentful data:", error);
        window.location.href = "/not-found";
      } finally {
        setIsLoading(false);
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
          {/* <SearchBar placeholder="Search..." onChange={() => {}} /> */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ItemCard
                baseUrl={"/products/" + params.category + "/"}
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
