"use client";

import React from "react";
import { Menu, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Book } from "iconoir-react";
import Link from "next/link";

const { Text } = Typography;

// Định nghĩa kiểu cho menu items
interface MenuItem {
  name: string;
  key: string;
  icon: React.ReactNode;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    key: "dashboard",
    icon: <i className="fa-solid fa-chart-tree-map" />, // icon FA cần render JSX
    link: "/home",
  },
  {
    name: "AI Hướng Dẫn Sử Dụng",
    key: "ai-guide",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "AI Chat Thông Minh",
    key: "ai-smart-chat",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "AI Prompts Thông Minh",
    key: "ai-smart-prompts",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Pháp Sư Bài Viết AI",
    key: "ai-wizard",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Biên Tập Thông Minh AI",
    key: "ai-smart-editor",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Viết Lại Với AI",
    key: "ai-rewriter",
    icon: <Book />,
    link: "/ai-rewriter",
  },
  {
    name: "Tạo Video Với AI",
    key: "ai-video",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Hình Ảnh sang Video",
    key: "image-to-video",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Tạo Hình Ảnh Với AI",
    key: "ai-image-generator",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "AI Photo Studio",
    key: "ai-photo-studio",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "AI Vision (Hình Ảnh)",
    key: "ai-vision",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Văn Bản Sang Giọng Nói",
    key: "text-to-speech",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Lồng Tiếng Với AI (TTS)",
    key: "ai-tts",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Nhân bản Giọng nói",
    key: "voice-clone",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "AI Speech to Text",
    key: "speech-to-text",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "AI Youtube",
    key: "ai-youtube",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Viết Mã Bằng AI",
    key: "ai-code",
    icon: <Book />,
    link: "/home",
  },
  {
    name: "Tất Cả Tài Liệu",
    key: "all-documents",
    icon: <Book />,
    link: "/home",
  },
];

const SideBar: React.FC = () => {
  return (
    <Sider
      className="fixed top-0 pt-20 left-0 h-screen z-10 overflow-scroll"
      width="15%"
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="pt-4">
        <Text className="pl-6 text-gray-500 font-semibold">
          BẢNG ĐIỀU KHIỂN AI
        </Text>
        <Menu mode="inline" defaultSelectedKeys={["ai-rewriter"]}>
          {menuItems.map(({ key, name, icon, link }) => (
            <Menu.Item key={key}>
              <Link href={link} className="flex gap-2">
                {icon}
                <Text>{name}</Text>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Sider>
  );
};

export default SideBar;
