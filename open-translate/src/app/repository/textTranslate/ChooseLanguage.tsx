"use client";

import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { languages } from "../../../../constants/ai-rewriter/data";

<<<<<<< Updated upstream
<<<<<<< Updated upstream
// Định nghĩa kiểu cho người dùng
=======
// Định nghĩa kiểu cho ngôn ngữ
>>>>>>> Stashed changes
=======
// Định nghĩa kiểu cho ngôn ngữ
>>>>>>> Stashed changes
interface Language {
  value: string;
  label: string;
}

interface ChooseLanguageProps {
  onLanguageChange: (newLanguage: string[]) => void;
}

// Tách riêng component ChooseLanguage
const ChooseLanguage: React.FC<ChooseLanguageProps> = ({ onLanguageChange }) => {
  const [selected, setSelected] = useState<Language>(languages[0]);

  // Khi ngôn ngữ thay đổi, gọi onLanguageChange để cập nhật
  const handleSelectLanguage = (selectedLanguage: Language) => {
    setSelected(selectedLanguage);
    onLanguageChange([selectedLanguage.value]);
  };

  return (
    <Listbox value={selected} onChange={handleSelectLanguage}>
      <div className="relative mt-2 flex">
        <ListboxButton className="relative cursor-default py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none">
          <span className="block truncate">{selected.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </ListboxButton>
        <ListboxOptions
          transition
          className="grid grid-cols-4 absolute right-[-25.5rem] z-10 mt-1 max-h-56 w-[850px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {languages.map((language, index) => (
            <ListboxOption
              key={index}
              value={language}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-200 data-[focus]:text-blue-500"
            >
              <div>
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {language.label}
                </span>
              </div>
              <span className="absolute inset-y-0 right-0 pr-4 text-blue-500 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden"></span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

// Hàm chính của component
export default function LanguageChoose() {
  // Xử lý thay đổi ngôn ngữ
  const handleLanguageChange = (newLanguage: string[]) => {
  };

  return (
    <div>
      <ChooseLanguage onLanguageChange={handleLanguageChange} />
    </div>
  );
}
