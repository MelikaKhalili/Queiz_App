import { useContext } from "react";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import "./Questions.css";
export default function Questions() {
  const { isLightMode, setIsLightMode } = useContext<any>(ThemeContext);
  const handelDarkMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div
      className={
        "dark   w-screen h-screen overflow-hidden flex justify-center items-center "
      }
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0 "></div>
      <GreenWaveBackGround className="flex  justify-center items-center w-screen" />
      <div
        className={`absolute  z-10 w-[60%] h-[70%] rounded-2xl border-4 border-white ${
          isLightMode ? "bg-green-300" : "Background"
        }`}
      >
        <div className="flex justify-start pl-6  flex-col gap-20 ">
          <h1
            className={` text-[40px] font-bold  text-stroke-green py-6 ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            QUIZLY
          </h1>
        </div>
        <div className="back flex justify-center items-center "></div>
        <button
          onClick={handelDarkMode}
          className={`w-[43px] h-[43px] rounded-[100%] absolute top-8 right-8 ${
            isLightMode ? " bg-green-900" : "bg-green-400"
          }`}
        >
          <img
            className="translate-x-[50%]"
            src={IconDarkMode}
            alt="IconDarkMode"
          />
        </button>
      </div>
    </div>
  );
}
