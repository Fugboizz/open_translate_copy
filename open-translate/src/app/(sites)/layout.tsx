import { ReactNode } from "react";

// Định nghĩa kiểu cho props của component Layout
interface LayoutProps {
  children: ReactNode; // ReactNode bao gồm tất cả các kiểu dữ liệu có thể render được trong React (JSX, string, number, etc.)
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};
export default Layout;
