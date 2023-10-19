import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center gap-10 m-10">
      <h1 className="text-2xl">About Page</h1>

      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
