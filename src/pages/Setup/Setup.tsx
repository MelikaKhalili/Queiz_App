import { useContext } from "react";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import BackGround from "../../components/base/BackGround/BackGround";
import BackGroundTheme from "../../components/base/BackGroundTheme/BackGroundTheme";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import "./Setup.css";
export default function Setup() {
  const { isDarkMode, setIsDarkMode } = useContext<any>(ThemeContext);
  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Hello");
  };

  return (
    <div className="relative min-h-[100vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <GreenWaveBackGround className="flex justify-center items-center w-full h-screen" />

      {isDarkMode ? (
        <BackGroundTheme className="absolute z-10 w-[60%] h-[70%] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center border-4 border-white rounded-2xl">
          <div className="flex justify-center items-center flex-col gap-4 py-2">
            <h1 className="text-black text-[40px] font-bold  text-stroke-green">
              QUIZLY
            </h1>
            <p className="text-green-900 font-bold rounded-lg w-24 h-8 bg-green-200 flex justify-center items-center wavy">
              Setup Quiz
            </p>
          </div>
          <div
            onClick={handelDarkMode}
            className="bg-green-400 w-[43px] h-[43px] rounded-[100%] fixed top-8 right-8"
          >
            <div className="absolute translate-x-[50%] translate-y-[50%]">
              <img src={IconDarkMode} alt="IconDarkMode" />
            </div>
          </div>
        </BackGroundTheme>
      ) : (
        <BackGround className="absolute z-10 w-[60%] h-[70%] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center border-4 border-white rounded-2xl">
          <div className="flex justify-center items-center flex-col gap-4 py-2">
            <h1 className="text-white text-[40px] font-bold shadow text-stroke-green">
              QUIZLY
            </h1>
            <p className="text-green-900 font-bold rounded-lg w-24 h-8 flex justify-center items-center wavy bg-cloud-pattern">
              Setup Quiz
            </p>
          </div>
          <div
            onClick={handelDarkMode}
            className="bg-green-700 w-[43px] h-[43px] rounded-full fixed top-8 right-8"
          >
            <div className="absolute translate-x-[50%] translate-y-[50%]">
              <img src={IconDarkMode} alt="IconDarkMode" />
            </div>
          </div>
        </BackGround>
      )}
    </div>
  );
}
