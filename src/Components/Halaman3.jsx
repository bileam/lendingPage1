import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Halaman3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });
  return (
    <div className="container py-3 h-[100vh] justify-center  px-4 flex flex-col text-[20px] gap-2 md:px-15 mx-auto items-center md:items-start">
      <div className="flex flex-col md:flex-row md:justify-between  w-full items-center">
        <div>
          <h1 data-aos="fade-up">Why Choose Us</h1>
          <ol
            data-aos="fade-up"
            className="list-disc text-[#c7bbbb] text-[15px] flex flex-col gap-1 md:px-12"
          >
            <li className="">experienced Dey Team</li>
            <li>Scalable Erchitecture</li>
            <li>Ciean Code & Documentations</li>
            <li>Dedicated Support</li>
          </ol>
        </div>
        <div
          data-aos="fade-up"
          className="flex md:flex-row flex-col items-center md:gap-4 pt-2 gap-2"
        >
          <input
            type="search"
            placeholder="Enter Your Text"
            name=""
            id=""
            className="bg-white h-7 md:w-60 w-70 rounded-sm text-black p-2 text-[15px]"
          />
          <button className="cursor-pointer bg-red-600 rounded-md text-[16px] px-4 outline outline-red-600">
            Searching
          </button>
        </div>
      </div>
    </div>
  );
};

export default Halaman3;
