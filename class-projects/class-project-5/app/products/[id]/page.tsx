"use client";
import { useEffect, useState } from "react";

interface ProductProps {
  id: number;
}

interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
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

const Page = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<PostItem>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });
  useEffect(() => {
    fetchPost(params.id).then((response) => {
      setData(response);
    });
  }, [params]);
  return (
    <div>
      <h1>Post</h1>
      <h2>User ID: {data.userId}</h2>
      <h2>Post ID: {data.id}</h2>
      <div>{data.title}</div>
      <div>{data.body}</div>
    </div>
  );
};

export default Page;
