import Halaman1 from "./Halaman1";
import Halaman2 from "./Halaman2";
import Navbar from "./Navbar";
import wa from "../assets/wa.svg";
import Halaman3 from "./Halaman3";
import Halaman4 from "./Halaman4";

const Home1 = () => {
  return (
    <div className="relative">
      <Navbar />
      <Halaman1 />
      <Halaman2 />
      <div className="container mx-auto">
        <a href="https://wa.me/6281242922597">
          <img src={wa} alt="" className="fixed bottom-12 right-14" />
        </a>
      </div>
      <Halaman3 />
      <Halaman4 />
    </div>
  );
};
export default Home1;
