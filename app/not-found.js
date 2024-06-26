import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-1">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>Your requested page could not found. please back to home.</p>
      <Link href="/" className="px-3 py-2 bg-indigo-800 rounded-md ">
        Return Home
      </Link>
    </div>
  );
}
