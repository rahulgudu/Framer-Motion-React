import { BsGoogle, BsPlaystation } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { MdOutlineAirplay, MdOutlineLaptopMac } from "react-icons/md";
import { RiPhoneCameraLine } from "react-icons/ri";
import { SiSamsung, SiSony, SiTata } from "react-icons/si";
import { TbDeviceIpadHorizontal } from "react-icons/tb";
import { VscVmActive } from "react-icons/vsc";
import { StaggerContainer } from "../StaggerContainer";
import { MotionReveal } from "../MotionReveal";

const section1 = [
  {
    icon: <VscVmActive size={70} />,
    title: "Apple TV<",
  },
  {
    icon: <RiPhoneCameraLine size={70} />,
    title: "iPhone",
  },
  {
    icon: <MdOutlineLaptopMac size={70} />,
    title: "Mac",
  },
  {
    icon: <TbDeviceIpadHorizontal size={70} />,
    title: "iPad",
  },
  {
    icon: <MdOutlineAirplay size={70} />,
    title: "Air Play",
  },
];

const section2 = [
  {
    icon: <SiSamsung size={80} className="w-16 md:w-24" />,
  },
  {
    icon: <SiSony size={80} className="w-16 md:w-24" />,
  },
  {
    icon: <BsGoogle size={20} />,
    title: "Google TV",
  },
  {
    icon: <BsPlaystation size={30} />,
    title: "Playsation",
  },
  {
    icon: <SiTata size={30} />,
    title: "TATA Play",
  },
  {
    icon: <FaXbox size={30} />,
    title: "XBOX Play",
  },
];

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
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-20 mt-8">
        {section1.map((item) => (
          <MotionReveal>
            <div className="flex flex-col items-center">
              {item.icon}
              <span className="text-2xl">{item.title}</span>
            </div>
          </MotionReveal>
        ))}
      </StaggerContainer>

      <div className="mt-12 py-2 px-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          See it on your smart TV <br /> or streaming device
        </h1>
        <span className="mt-6 text-blue-700">Set up your device &gt;</span>

        <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 px-6 md:px-12 py-4">
          {section2.slice(0, 2).map((item) => (
            <MotionReveal>
              <>{item.icon}</>
            </MotionReveal>
          ))}
          {section2.slice(2).map((item) => (
            <MotionReveal>
              <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
                {item.icon}
                {item.title}
              </div>
            </MotionReveal>
          ))}
        </StaggerContainer>

        <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 px-6 md:px-12 py-4">
          {section2.slice(0, 2).map((item) => (
            <MotionReveal>
              <>{item.icon}</>
            </MotionReveal>
          ))}
          {section2.slice(2).map((item) => (
            <MotionReveal>
              <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
                {item.icon}
                {item.title}
              </div>
            </MotionReveal>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default AppleTVUI;
