"use client";
import Link from "next/link";
import { useState, useEffect, MouseEvent } from "react";
import TextTranslate from "../textTranslate/TextTranslate";
import ImageTranslate from "@/app/repository/textTranslate/ImageTranslate";
import DocsTranslate from "@/app/repository/textTranslate/DocsTranslate";
import WebsTranslate from "@/app/repository/textTranslate/WebsTranslate";
import ChooseLanguage from "@/app/repository/textTranslate/ChooseLanguage";

interface ContainerProps {}

const Container: React.FC<ContainerProps> = () => {
  const [countText, setCountText] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useState<string>("van-ban");
  const [languages, setLanguages] = useState<string[]>([]);
  const count = () => {
    if (countText < 5000) {
      setCountText(countText + 1); // Fix lỗi `count` gây ra vòng lặp
    }
  };

  useEffect(() => {
    const storedLanguages = localStorage.getItem("languages");
    if (storedLanguages) {
      setLanguages(JSON.parse(storedLanguages));
    }
  }, []);

  const handleButtonClick = (
    key: string,
    event: MouseEvent<HTMLButtonElement>
  ) => {
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
            Tài Liệu
          </Link>
        </button>

        {/* Nút Web */}
        <button
          onClick={(e) => handleButtonClick("web", e)}
          className={`relative overflow-hidden flex justify-center items-center gap-2 transition-all duration-300 ease-in-out 
            ${
              selectedKey === "web"
                ? "bg-white border-gray-300"
                : "bg-white border-gray-300"
            } text-blue-500 px-4 py-2 rounded-md border`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            className="ep0rzf NMm5M"
          >
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H4v-3.5zM20 18h-3.5V9H20v9z"
              fill="rgb(59 130 246 / var(--tw-bg-opacity))"
            ></path>
          </svg>
          Trang Web
        </button>
      </ul>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-1/2">
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

              <ChooseLanguage></ChooseLanguage>
            </ul>
          </div>
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

        <div className="flex justify-between items-center w-1/2 ml-4">
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
              <ChooseLanguage></ChooseLanguage>
            </ul>
          </div>
        </div>
      </div>
      <ul>
        <li className={selectedKey == "van-ban" ? "" : "hidden"}>
          <TextTranslate></TextTranslate>
        </li>
        <li className={selectedKey == "hinh-anh" ? "" : "hidden"}>
          <ImageTranslate></ImageTranslate>
        </li>
        <li className={selectedKey == "tai-lieu" ? "" : "hidden"}>
          <DocsTranslate></DocsTranslate>
        </li>
        <li className={selectedKey == "web" ? "" : "hidden"}>
          <WebsTranslate></WebsTranslate>
        </li>
      </ul>
    </div>
  );
};

export default Container;
