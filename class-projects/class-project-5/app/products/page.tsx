"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(pageNumber: number, pageSize: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${pageSize}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function Page(props: any) {
  const [data, setData] = useState<PostItem[]>([]);
  const [pageNumber, setPageInfo] = useState(1);

  const pageSize = 6;

  useEffect(() => {
    console.log(pageNumber);
    fetchPosts(pageNumber, pageSize).then((response) => {
      setData(response);
    });
  }, [pageNumber]);

  const handleClick = (action: string) => {
    return (event: React.MouseEvent) => {
      switch (action) {
        case "increment":
          //set prev page number but increment page number
          setPageInfo(pageNumber + 1);
          break;
        case "decrement":
          setPageInfo(pageNumber - 1);
          break;
        default:
      }
    };
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-10 m-10 border-2 border-solid p-10 rounded-md">
        <h1 className="font-bold text-2xl ">Test Data Fetching & Pagination</h1>
      </div>
      <div className="flex gap-5">
        <button
          disabled={pageNumber === 1}
          className={pageNumber === 1 ? "text-gray-400" : ""}
          onClick={handleClick("decrement")}
        >{`<- Prev`}</button>

        <span>{pageNumber}</span>
        <button
          disabled={pageNumber === 5}
          className={pageNumber === 5 ? "text-gray-400" : ""}
          onClick={handleClick("increment")}
        >{`Next ->`}</button>
      </div>
      <div className="grid grid-cols-2 w-3/4 gap-1">
        {data.map((post: PostItem) => {
          return (
            <div className="flex flex-col p-2 h-150 bg-slate-50" key={post.id}>
              <h2 className="text-xl bold font-bold">{post.title}</h2>
              <div>{post.body}</div>
              <Link href={`/products/${post.id}`}>Link</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
