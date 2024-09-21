import { useState } from "react";
import { languages } from "../../app/(sites)/ai-rewriter/data";
const LanguageSelector = () => {
  const storeageLanguages = localStorage.getItem("choose");
  const [choose, setChosse] = useState("");

  const handleLanguage = (key) => {
    setChosse(key);
    localStorage.setItem(key.value, key.label);
  };
  return (
    <ul className="grid grid-cols-5 gap-4">
      {languages.map((lang) => (
        <li
          className="cursor-pointer p-2 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-500"
          onClick={() => handleLanguage(lang)}
          key={lang.value}
        >
          {lang.label}
        </li>
      ))}
    </ul>
  );
};
export default LanguageSelector;
