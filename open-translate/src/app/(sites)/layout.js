import Header from "@/components/header";
import SideBar from "@/components/side-bar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div>
        <SideBar />
        <div className="w-[85%] ml-[15%] mt-20">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
