import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center gap-10 m-10 border-2 border-solid p-10 rounded-md">
      <h1 className="font-bold text-2xl">History Page</h1>

      <Link className="underline underline-line-offset-4" href="/">
        Go to Home Page
      </Link>
    </div>
  );
}
