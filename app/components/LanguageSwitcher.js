"use client";
import Image from "next/image";
import { useState } from "react";
export default function LanguageSwitcher() {
  const [showMenu, setShowMenu] = useState(false);
  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
  ];
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <button
          className="flex items-center gap-2 text-xs"
          onClick={() => setShowMenu((s) => !s)}
        >
          <Image
            className="max-w-8"
            src="/bd.png"
            alt="bangla"
            height={80}
            width={100}
          />
          Bangla
        </button>
        {showMenu && (
          <ul className="absolute right-0 z-10 w-40 p-2 mt-2 bg-white rounded-md shadow-lg top-full">
            {languages?.map((entry) => (
              <li
                key={entry.code}
                className="flex items-center gap-2 p-2 text-sm text-black rounded-md cursor-pointer hover:bg-gray-200"
              >
                <Image
                  className="max-w-6"
                  src="/bd.png"
                  alt="bangla"
                  height={80}
                  width={100}
                />
                {entry.language}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
