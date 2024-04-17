"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  const id = pathArray[pathArray.length - 1];

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-1">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>This movie with {id} id was not found!</p>
      <Link href="/" className="px-3 py-2 bg-indigo-800 rounded-md ">
        Return Home
      </Link>
    </div>
  );
}
