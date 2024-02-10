"use client";
import React, { useState, useEffect, use } from "react";
import { useContext } from "@/context/context";
import Spinner from "@/components/Spinner";
import { fetchGraphQL } from "@/utils/networking/contentfulFetch";
import Price from "@/components/Price";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import "react-toastify/dist/ReactToastify.css";

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
  const { isLoading, setIsLoading, addToCart } = useContext();
  const [product, setProduct] = useState<Product>({} as Product);

  const randomNum = Math.random() * (4.8 - 2.5) + 2.5;

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

  const handleAddToCart = (e: React.MouseEvent) => {
    addToCart(product);
    toast.success("Item added to cart", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
        <div
          className="grid 
         grid-rows-[120px, auto] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grild-cols-4 gap-5"
        >
          {/* #row 1 */}
          <div className="flex flex-col justify-center items-center md:col-span-4">
            <div className="mt-5 text-2xl">{product.title}</div>
            <Rating name="read-only" value={randomNum} readOnly />
            <Price price={product.price} />
          </div>
          {/* row2 */}
          <div className="flex flex-col justify-center items-center w-full md:row-start-2 lg:col-span-2 ">
            <img
              className="border-2 border-[#6c757d] h-96 object-contain bg-white md:ml-10"
              src={product.image.url}
            />
          </div>
          {/* row3 */}
          <div className="flex flex-col justify-center items-center mb-10 md:row-start-2  md:justify-start md:mb-0 lg:col-span-2">
            <div className="w-2/3 my-5 font-sans md:mt-0 md:mb-8">
              {product.description}{" "}
            </div>
            <div
              onClick={handleAddToCart}
              className="bg-[#336688ff] text-white p-2 rounded  mt-auto hover:cursor-pointer"
            >
              Add to cart
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
