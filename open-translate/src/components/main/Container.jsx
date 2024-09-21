"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import LanguageSelector from "../container/LanguageSelector";
import TextTranslate from "../textTranslate/TextTranslate";
const Container = () => {
  const [countText, setCountText] = useState(0);
  const count = () => {
    if (countText < 5000) {
      setCountText(count);
    } else {
      return;
    }
  };
  const [selectedKey, setSelectedKey] = useState("van-ban");
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const storedLanguages = localStorage.getItem("languages");
    if (storedLanguages) {
      setLanguages(JSON.parse(storedLanguages));
    }
  }, []);

  const handleButtonClick = (key, event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);

    setSelectedKey(key);
  };

  return (
    <div className="py-10 max-w-screen-2xl text-base mx-auto px-8">
      <ul className="flex gap-4 items-center">
        {/* Nút Văn Bản */}
        <button
          onClick={(e) => handleButtonClick("van-ban", e)}
          className={`relative overflow-hidden flex justify-center items-center gap-2 transition-all duration-300 ease-in-out 
            ${
              selectedKey === "van-ban"
                ? "bg-white border-gray-300"
                : "bg-white border-gray-300"
            } text-blue-500 px-4 py-2 rounded-md border`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="rgb(25,103,210)"
          >
            <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
          </svg>
          <Link
            className="text-blue-600"
            href={"#../textTranslate/TextTranslate"}
          >
            Văn Bản
          </Link>
        </button>

        {/* Nút Hình Ảnh */}
        <button
          onClick={(e) => handleButtonClick("hinh-anh", e)}
          className={`relative overflow-hidden flex justify-center items-center gap-2 transition-all duration-300 ease-in-out 
            ${
              selectedKey === "hinh-anh"
                ? "bg-white border-gray-300"
                : "bg-white border-gray-300"
            } text-blue-500 px-4 py-2 rounded-md border`}
        >
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="rgb(25,103,210)"
          >
            <g>
              <rect fill="none" height="24" width="24"></rect>
            </g>
            <g>
              <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M6,17l3-4l2.25,3l3-4L18,17H6z"></path>
            </g>
          </svg>
          <Link
            className="text-blue-600"
            href={"#../textTranslate/TextTranslate"}
          >
            Hình Ảnh
          </Link>
        </button>

        {/* Nút Video */}
        <button
          onClick={(e) => handleButtonClick("video", e)}
          className={`relative overflow-hidden flex justify-center items-center gap-2 transition-all duration-300 ease-in-out 
            ${
              selectedKey === "video"
                ? "bg-white border-gray-300"
                : "bg-white border-gray-300"
            } text-blue-500 px-4 py-2 rounded-md border`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="rgb(25,103,210)"
          >
            <path d="M17 10.5V7c0-.83-.67-1.5-1.5-1.5h-11C4.67 5.5 4 6.17 4 7v10c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3.5l4 4v-11l-4 4z"></path>
          </svg>
          <Link
            className="text-blue-600"
            href={"#../textTranslate/TextTranslate"}
          >
            Tài Liệu
          </Link>
        </button>

        {/* Nút Tài Liệu */}
        <button
          onClick={(e) => handleButtonClick("tai-lieu", e)}
          className={`relative overflow-hidden flex justify-center items-center gap-2 transition-all duration-300 ease-in-out 
            ${
              selectedKey === "tai-lieu"
                ? "bg-white border-gray-300"
                : "bg-white border-gray-300"
            } text-blue-500 px-4 py-2 rounded-md border`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="rgb(25,103,210)"
          >
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM13 9V3.5L18.5 9H13z"></path>
          </svg>
          <Link
            className="text-blue-600"
            href={"#../textTranslate/TextTranslate"}
          >
            Trang Web
          </Link>
        </button>
      </ul>
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex items-center gap-10 py-4 px-2">
            <li
              className="hover:bg-blue-50 cursor-pointer py-3 relative after:absolute after:bottom-0 after:left-0
           after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Phát Hiện Ngôn Ngữ
            </li>
            {languages.length > 0 ? (
              languages.map((language, index) => (
                <li
                  className="hover:bg-blue-50 cursor-pointer py-3 relative after:absolute after:bottom-0 after:left-0
            after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
                  key={index}
                >
                  {language}
                </li>
              ))
            ) : (
              <li
                className="hover:bg-blue-50 cursor-pointer py-3 relative after:absolute after:bottom-0 after:left-0
            after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
              >
                Không có dữ liệu ngôn ngữ
              </li>
            )}
            <a href="/" className="translate-x-">
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
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </a>
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>

        <div>
          <ul className="flex items-center gap-10 py-4 px-2">
            <li
              className="hover:bg-blue-50 cursor-pointer py-3 relative after:absolute after:bottom-0 after:left-0
           after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Phát Hiện Ngôn Ngữ
            </li>
            {languages.length > 0 ? (
              languages.map((language, index) => (
                <li
                  className="hover:bg-blue-50 cursor-pointer py-3 relative after:absolute after:bottom-0 after:left-0
            after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
                  key={index}
                >
                  {language}
                </li>
              ))
            ) : (
              <li
                className="hover:bg-blue-50 cursor-pointer py-3 relative after:absolute after:bottom-0 after:left-0
            after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
              >
                Không có dữ liệu ngôn ngữ
              </li>
            )}
            <a href="/" className="translate-x-">
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
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-10 h-[250px]">
        <div className="relative w-1/2  h-full">
          <input type="text" className=" w-full h-full rounded-md border " />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute bottom-1.5 left-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </div>

        <div className="relative w-1/2  h-full">
          <input type="text" className=" w-full h-full rounded-md border " />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute bottom-1.5 left-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Container;
