import { useContext, useState } from "react";
import Confetti from "react-confetti";
import { IoMoon } from "react-icons/io5";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import { QuizContext } from "../../components/QuestionsProvider/QuestionsProvider";
export default function Review() {
  const { isDarkMode, setIsDarkMode } = useContext<any>(ThemeContext);
  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [showConfetti, setShowConfetti] = useState(false);
  const { state } = useContext<any>(QuizContext);
  const { questions, selectedAnswer } = state;
  console.log(questions);
  console.log(selectedAnswer);
  const handelConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };
  return (
    <div
      className={`dark w-screen h-screen ${
        isDarkMode ? "bg-black" : " bg-green-600"
      }`}
    >
      <div
        onClick={handelDarkMode}
        className="absolute top-8 left-4 w-10 h-10 rounded-full bg-white flex justify-center items-center"
      >
        <IoMoon size={"30px"} />
      </div>
      {showConfetti && <Confetti />}
      <div className="flex justify-center items-center">
        <button onClick={handelConfetti}>
          <h1 className="mt-8 font-bold text-2xl text-white bg-slate-500 px-6 py-2 rounded-md">
            Your Review
          </h1>
        </button>
      </div>
      {questions.map((question: any, index: any) => {
        return (
          <div key={index}>
            <div>{question.question}</div>
          </div>
        );
      })}
    </div>
  );
}
