"use client";

import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { languages } from "/WorkSpace/NextJs/open-translate - Copy/open-translate/constants/ai-rewriter/data";
// Định nghĩa kiểu cho người dùng
interface Language {
  value: string;
  label: string;
}

// Hàm chính của component
export default function LanguageChoose() {
  const [selected, setSelected] = useState<Language>(languages[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2 flex">
        <ListboxButton className="relative cursor-default  py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none">
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
          className="grid grid-cols-4 absolute right-[-25.5rem] z-10 mt-1 max-h-56 w-[850px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {languages.map((languages, index) => (
            <ListboxOption
              key={index}
              value={languages.value}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-200 data-[focus]:text-blue-500"
            >
              <div className="">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {languages.label}
                </span>
              </div>
              <span className="absolute inset-y-0 right-0 pr-4 text-blue-500 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden"></span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
