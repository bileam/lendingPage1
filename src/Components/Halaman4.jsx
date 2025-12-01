import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Halaman4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });

  return (
    <div data-aos="fade-up" className="border-t border-t-[#cdcdcd] h-[50vh] ">
      <div className="container flex flex-col items-center px-4 md:px-15 py-8 mx-auto md:items-center md:gap-6 md:gap-x-35 ">
        <div className="flex flex-col gap-5 items-center py-10 w-full border-b">
          <div className="text-[18px] text-red-600">
            <h1>CodeBoost!</h1>
          </div>
          <div className="flex gap-4 text-[14px] text-[#cdcdcd]">
            <a href="#" className="hover:text-blue-200">
              Home
            </a>
            <a href="#" className="hover:text-blue-200">
              Shop
            </a>
            <a href="#" className="hover:text-blue-200">
              Blog
            </a>
            <a href="#" className="hover:text-blue-200">
              About Me
            </a>
            <a href="#" className="hover:text-blue-200">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex justify-between  w-full">
          <div className="text-[15px] text-[#cdcdcd]">
            <h1>@Bileam Mangalla. All Right Responsive</h1>
          </div>
          <div className="flex text-[15px] text-[#cdcdcd] gap-3">
            <a href="#">Team</a>
            <a href="#">Privacy</a>
            <a href="#">Contain</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Halaman4;
