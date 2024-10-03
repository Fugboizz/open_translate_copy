import Footer from "@/app/repository/Footer/Footer";
import Header from "@/app/repository/Header/Header";
import MainContainer from "@/app/repository/Main/MainContainer";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <div>
        <MainContainer></MainContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}
