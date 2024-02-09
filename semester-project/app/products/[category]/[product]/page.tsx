"use client";
import React, { useState, useEffect, use } from "react";
import { useContext } from "@/context/context";
import Spinner from "@/components/Spinner";
import { fetchGraphQL } from "@/utils/networking/contentfulFetch";
import Price from "@/components/Price";
import { toast } from "react-toastify";

require("dotenv").config();

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

interface PageProps {
  params: {
    category: string;
    product: string;
  };
}

interface Product {
  title: string;
  price: number;
  weight: number;
  description: string;
  image: {
    title: string;
    description: string;
    contentType: string;
    url: string;
  };
}

function Page({ params }: PageProps) {
  const { isLoading, setIsLoading } = useContext();
  const [product, setProduct] = useState<Product>({} as Product);

  const productName = params.product.replace(/-/g, " ");

  if (typeof window !== "undefined") {
    document.title =
      "GymRoo - " + productName[0].toUpperCase() + productName.slice(1);
  }

  const query = `
  query {
    productCollection(where: {title_contains: "${productName}"}) {
      items {
        title
        price
        weight
        image {
          title
          description
          contentType
          url
        }
        description 

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


        
        setProduct(data.data.productCollection.items[0]);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <Spinner />
      {!isLoading && product && product.image && (
        <>
          {product.title}
          <Price price={product.price} />

          <img
            className="border-2 border-[#6c757d] h-60 object-contain bg-white"
            src={product.image.url}
          />
          <div>{product.description} </div>
        </>
      )}
    </div>
  );
}

export default Page;
