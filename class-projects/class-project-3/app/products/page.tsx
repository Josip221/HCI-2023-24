import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center gap-10 m-10 border-2 border-solid p-10 rounded-md">
      <h1 className="font-bold text-2xl">Products Page</h1>

      <div className="flex flex-col justify-center items-center">
        <Link href="/products/categories">Categories</Link>
        <Link href="/products/compare">Compare</Link>
      </div>

      <Link className="underline underline-line-offset-4" href="/">
        Go to Home Page
      </Link>
    </div>
  );
}