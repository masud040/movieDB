"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
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
  const match = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLang, setSelectedLang] = useState(match ?? languages[0]);
  const handleChangeLang = (locale, lang) => {
    setSelectedLang({
      ...selectedLang,
      code: locale,
      language: lang,
    });
    setShowMenu(false);
    router.push(`/${locale}`);
  };

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
          {selectedLang.language}
        </button>
        {showMenu && (
          <ul className="absolute right-0 z-10 w-40 p-2 mt-2 bg-white rounded-md shadow-lg top-full">
            {languages?.map((entry) => (
              <li
                key={entry.code}
                className="flex items-center gap-2 p-2 text-sm text-black rounded-md cursor-pointer hover:bg-gray-200"
                onClick={() => handleChangeLang(entry.code, entry.language)}
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
