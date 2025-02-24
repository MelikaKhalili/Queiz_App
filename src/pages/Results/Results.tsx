import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Above70 from "../../assets/images/Above70.png";
import Lassthan20 from "../../assets/images/Lessthan20.png";
import Lassthan50 from "../../assets/images/Lessthan50.png";
import Lassthan70 from "../../assets/images/Lessthan70.png";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import { QuizContext } from "../../components/QuestionsProvider/QuestionsProvider";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import "./Results.css";
// const navigate = useNavigate();
// const handelAgain = () => {
//   navigate("/");
// };

const Scorechart = [
  { Score: 70, img: Above70, text: "صلی علی سترکه چشما ترامپ بترکه" },
  { Score: 50, img: Lassthan70, text: "آفرین اگور پگور" },
  { Score: 20, img: Lassthan50, text: "میتونه بهتر باشه ها تلاش کن" },
  {
    Score: 0,
    img: Lassthan20,
    text: "یذره فشار بیار به خودت نتیجه بهتر باشه خب",
  },
];

export default function Results() {
  const navigate = useNavigate();
  const handelAgain = () => {
    navigate("/");
  };
  const handelReviewPage = () => {
    navigate("/review");
  };
  const { isLightMode, setIsLightMode } = useContext<any>(ThemeContext);
  const { state } = useContext<any>(QuizContext);
  const { score, totalQuestions } = state;

  const percentage =
    totalQuestions > 0
      ? parseInt(((score / totalQuestions) * 100).toFixed(2))
      : 0;

  const currentSticker = Scorechart.find((item) => percentage >= item.Score);

  const handelDarkMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div
      className={`dark w-screen h-screen overflow-hidden flex justify-center items-center container ${
        isLightMode ? "bg-white" : "bg-black"
      }`}
    >
      <GreenWaveBackGround className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>

      <div
        className={`absolute flex flex-col z-10 w-[60%] h-[70%] rounded-2xl border-4 border-white container-cart ${
          isLightMode ? "bg-green-300" : "Background"
        }`}
      >
        <div className="flex justify-between w-full px-12 parent-header">
          <h1
            className={`text-[40px] font-bold py-6 text-start ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            QUIZLY
          </h1>
          <button
            onClick={handelDarkMode}
            className={`w-[43px] h-[43px] rounded-full mt-8 ${
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

        <div className="text-white glass-box2 flex justify-center items-center  gap-10 parent-glassbox">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="bg-white w-24 h-24 rounded-full flex justify-center items-center  ">
              <img className="w-16 " src={currentSticker?.img} alt="Sticker" />
            </div>
            <div className="flex justify-center items-center  text-center">
              <p>{currentSticker?.text}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <div>
              <h1>
                Your rating: {score} of {totalQuestions}
              </h1>
              <p>Your final percentage: {percentage}%</p>
            </div>
            <div className="flex justify-center items-center">
              <Button
                onClick={handelAgain}
                size={"sm"}
                width={"32"}
                rounded={"2xl"}
                bg={"green.400"}
                color={"green.50"}
              >
                Again
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8">
        <Button
          onClick={handelReviewPage}
          width={"200px"}
          color={"white"}
          bg={"yellow.600"}
          rounded={"20px"}
        >
          Review
        </Button>
      </div>
    </div>
  );
}
