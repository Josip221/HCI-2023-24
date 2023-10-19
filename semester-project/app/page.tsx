import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-10">
      <h1 className="text-2xl">Home page</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
