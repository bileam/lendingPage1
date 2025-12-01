import logoreact from "../assets/react.svg";
import sistem from "../assets/sistem.png";
import web from "../assets/web.svg";
import mobile from "../assets/mobile.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Halaman2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });
  return (
    <div className="container px-4 flex flex-col text-[20px] gap-2 md:px-15 mx-auto items-center md:items-start">
      <h1 data-aos="fade-up">Sercvis We Offer</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center">
        <div
          data-aos="fade-up"
          className="shadow-2xl w-[80%] h-50 bg-[#B22222] rounded-sm flex flex-col gap-2 hover:text-black hover:bg-blue-200 transition duration-300 hover:font-bold cursor-pointer"
        >
          <div className="flex gap-6  py-5 px-15 items-center ">
            <img src={web} alt="" className="w-9  h-9 " />
            <h1 className="text-[18px]">
              Custom Web <br /> Development
            </h1>
          </div>
          <div className="flex px-15">
            <p className="text-justify text-[12px]">
              Moderm and responsive website talored to your Bussiness Needs
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="shadow-2xl w-[80%] h-50 bg-[#B22222] rounded-sm flex flex-col gap-2 hover:text-black hover:bg-blue-200 transition duration-300 hover:font-bold cursor-pointer"
        >
          <div className="flex gap-6  py-5 px-15 items-center ">
            <img src={mobile} alt="" className="w-9  h-9 bg-black" />
            <h1 className="text-[18px]">
              Mobile App <br /> Development
            </h1>
          </div>
          <div className="flex px-15">
            <p className="text-justify text-[12px]">
              Moderm and responsive website talored to your Bussiness Needs
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="shadow-2xl w-[80%] h-50 bg-[#B22222] rounded-sm flex flex-col gap-2 hover:text-black hover:bg-blue-200 transition duration-300 hover:font-bold cursor-pointer"
        >
          <div className="flex gap-6  py-5 px-15 items-center ">
            <img src={sistem} alt="" className="w-9  h-9" />
            <h1 className="text-[18px]">
              System <br /> Integration
            </h1>
          </div>
          <div className="flex px-15">
            <p className="text-justify text-[12px]">
              Moderm and responsive website talored to your Bussiness Needs
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full mb-2 justify-center">
        <button
          data-aos="fade-up"
          className="text-[12px] cursor-pointer py-1 px-4 rounded-sm outline hover:outline-blue-200 hover:text-blue-200"
        >
          View All Project
        </button>
      </div>
    </div>
  );
};

export default Halaman2;
