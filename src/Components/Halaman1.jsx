import koneksi from "../assets/koneksi.png";
import wa from "../assets/wa.svg";
const Halaman1 = () => {
  return (
    <div className="container h-[100vh]  flex flex-col items-center md:flex-row  px-4 md:px-15 py-8 mx-auto md:items-center md:gap-6 md:gap-x-35 ">
      <div className="order-1 md:order-2 mb-6 md:mb-0 ">
        <img src={koneksi} alt="koneksi" className="w-40 md:w-70" />
      </div>
      {/* Konten Teks */}
      <div className="flex flex-col gap-6 order-2 md:order-1 ">
        <div className="flex flex-col">
          <h1 className="text-[28px] md:text-[33px]">
            Building Custom <br /> Software That Powers <br />
            Your Business
          </h1>
        </div>
        <div>
          <p className="text-justify text-[13px] text-[#c7bbbb]">
            CodeBaeSIe is a full-servis softwere house that delivers <br />
            moderm, scalable and secure digital solution. <br />
            from website to enterprose systemn. <br />- we make tech word for
            you
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => alert("terklik")}
            className="text-[12px] px-4 py-1 rounded-sm bg-red-600 cursor-pointer hover:text-black hover:bg-blue-200 shadow"
          >
            Your Servissses
          </button>
          <button className="text-[12px] px-4 py-1 outline rounded-sm cursor-pointer hover:outline-red-800 hover:text-red-600">
            Out Bassiness
          </button>
        </div>
        {/* Gambar - Order berubah sesuai ukuran layar */}
      </div>
    </div>
  );
};
export default Halaman1;
