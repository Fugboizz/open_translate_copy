"use client";
import { Avatar, Image, Input } from "antd";
const { Search } = Input;

const Header = () => {
  return (
    <div className="bg-white shadow-md h-20 px-4  w-full z-50 flex items-center">
      <div className="w-[15%]">
        <Image
          className="cursor-pointer"
          width={60}
          height={60}
          preview={false}
          src="https://liteducation.vn/wp-content/themes/theme/asset/images/header/education.png"
        />
      </div>

      <div className="flex w-full justify-between p-6">
        <Search size="large" className="max-w-[400px]" />
        <Avatar
          size={50}
          className="cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/863/785/large_2x/ai-robot-thinking-with-hand-on-chin-artificial-intelligence-glowing-light-background-generative-ai-photo.jpeg"
        />
      </div>
    </div>
  );
};

export default Header;
