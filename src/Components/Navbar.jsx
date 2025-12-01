import { useState } from "react";
import burger from "../assets/burger1.svg";
import wa from "../assets/wa.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="container px-6 py-4 border-b border-[#3b3b3b] bg-black sticky top-0 mx-auto">
      <div className=" flex justify-between  items-center relative">
        {/* logo */}
        <div className="text-[16px] text-red-600 font-bold">
          <a href="#">
            <h1>CodeBaeSie</h1>
          </a>
        </div>
        {/* menu */}
        <ul className="md:flex hidden gap-6 text-[14px] text-[#c7bbbb] ">
          <li>
            <select className="cursor-pointer" name="" id="">
              <option value="Home">
                <a href="">Home</a>{" "}
              </option>
            </select>
          </li>
          <li>
            <select className="cursor-pointer" name="" id="">
              <option value="Shop">
                <a href="">Shop</a>
              </option>
            </select>
          </li>
          <li>
            <select className="cursor-pointer" name="" id="">
              <option value="Pages">
                <a href="">pages</a>
              </option>
            </select>
          </li>
          <li>
            <select className="cursor-pointer" name="" id="">
              <option value="Blog">
                <a href="">Blog</a>
              </option>
            </select>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Contact US</a>
          </li>
          <li>
            <a
              href="#"
              className=" px-2 py-2 rounded-md bg-red-600 text-white hover:bg-blue-200 hover:text-black"
            >
              Reset Ulang
            </a>
          </li>
        </ul>

        {/* button burger */}
        <div className="md:hidden flex">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            <img src={burger} className="w-9" />
          </button>
        </div>
        {menuOpen && (
          <>
            {" "}
            {/* menu ukuran mobile */}
            <ul className="md:hidden flex flex-col bg-white p-2 rounded text-black gap-6 text-[14px]  absolute right-0 top-14">
              <li>
                <select className="cursor-pointer" name="" id="">
                  <option value="Home">
                    <a href="">Home</a>{" "}
                  </option>
                </select>
              </li>
              <li>
                <select className="cursor-pointer" name="" id="">
                  <option value="Shop">
                    <a href="">Shop</a>
                  </option>
                </select>
              </li>
              <li>
                <select className="cursor-pointer" name="" id="">
                  <option value="Pages">
                    <a href="">pages</a>
                  </option>
                </select>
              </li>
              <li>
                <select className="cursor-pointer" name="" id="">
                  <option value="Blog">
                    <a href="">Blog</a>
                  </option>
                </select>
              </li>
              <li>
                <a href="">About Me</a>
              </li>
              <li>
                <a href="">Contact US</a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-2 py-2 rounded-md bg-red-600 text-white hover:bg-blue-200 hover:text-black"
                >
                  Reset Ulang
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
