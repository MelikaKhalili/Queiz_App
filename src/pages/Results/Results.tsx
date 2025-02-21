import { useContext } from "react";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import { QuizContext } from "../../components/QuestionsProvider/QuestionsProvider";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
export default function Results() {
  const { isLightMode, setIsLightMode } = useContext<any>(ThemeContext);
  // const { state } = useContext(QuizContext);
  // const { score, totalQuestions } = state;
  const handelDarkMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div
      className={`dark w-screen h-screen overflow-hidden flex justify-center items-center`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <GreenWaveBackGround className="flex justify-center items-center w-screen h-screen" />
      <div
        className={`absolute flex flex-col z-10 w-[60%] h-[70%] rounded-2xl border-4 border-white ${
          isLightMode ? "bg-green-300" : "Background"
        }`}
      >
        <div className="flex justify-between w-full px-12">
          <h1
            className={`text-[40px] font-bold text-stroke-green py-6 text-start ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            QUIZLY
          </h1>
          <button
            onClick={handelDarkMode}
            className={`w-[43px] h-[43px] rounded-[100%] mt-8 ${
              isLightMode ? "bg-green-900" : "bg-green-400"
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
    </div>
  );
}
