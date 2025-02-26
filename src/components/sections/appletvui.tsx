import { BsGoogle, BsPlaystation } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { MdOutlineAirplay, MdOutlineLaptopMac } from "react-icons/md";
import { RiPhoneCameraLine } from "react-icons/ri";
import { SiSamsung, SiSony, SiTata } from "react-icons/si";
import { TbDeviceIpadHorizontal } from "react-icons/tb";
import { VscVmActive } from "react-icons/vsc";

const AppleTVUI = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 mt-12">
      <div className="mb-6">
        <div className="flex items-center justify-center w-24 h-24 bg-black rounded-2xl mb-4 mx-auto">
          <span className="flex items-center text-white text-4xl font-bold">
            <IoLogoApple />
            tv
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Watch Apple TV+ anywhere <br />
          on the Apple TV app
        </h1>
        <p className="text-gray-600 text-lg mt-3">
          Find the Apple TV app everywhere from Apple devices to smart TVs.
          <br />
          Or watch online at{" "}
          <a href="https://tv.apple.com/in" className="text-blue-500">
            tv.apple.com/in
          </a>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-8">
        <div className="flex flex-col items-center">
          <VscVmActive size={60} /> <span className="text-2xl">Apple TV</span>
        </div>
        <div className="flex flex-col items-center">
          <RiPhoneCameraLine size={60} />{" "}
          <span className="text-2xl">iPhone</span>
        </div>
        <div className="flex flex-col items-center">
          <TbDeviceIpadHorizontal size={60} />{" "}
          <span className="text-2xl">iPad</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineLaptopMac size={60} /> <span className="text-2xl">Mac</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineAirplay size={60} />{" "}
          <span className="text-2xl">Air Play</span>
        </div>
      </div>

      <div className="mt-12 py-2 px-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          See it on your smart TV <br /> or streaming device
        </h1>
        <span className="mt-6 text-blue-700">Set up your device &gt;</span>

        <div className="flex flex-wrap justify-center items-center gap-8 px-6 md:px-12 py-4">
          <SiSamsung size={80} className="w-16 md:w-24" />
          <SiSony size={80} className="w-16 md:w-24" />
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <BsGoogle size={20} />
            Google TV
          </div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <BsPlaystation size={30} />
            PlayStation
          </div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <SiTata size={30} />
            TATA Play
          </div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <FaXbox size={30} />
            XBOX Play
          </div>
        </div>

        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 px-6 md:px-12 py-4">
          <SiSamsung size={80} className="w-16 md:w-24" />
          <SiSony size={80} className="w-16 md:w-24" />
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <BsGoogle size={20} />
            Google TV
          </div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <BsPlaystation size={30} />
            PlayStation
          </div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <SiTata size={30} />
            TATA Play
          </div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <FaXbox size={30} />
            XBOX Play
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleTVUI;
