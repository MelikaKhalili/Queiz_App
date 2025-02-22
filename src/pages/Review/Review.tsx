import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { IoMoon } from "react-icons/io5";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import { QuizContext } from "../../components/QuestionsProvider/QuestionsProvider";
import StarBorder from "../../components/StarBoder/StarBorder";
import "./Review.css";

export default function Review() {
  const Answers = localStorage.getItem("Question");
  const { isDarkMode, setIsDarkMode } = useContext<any>(ThemeContext);
  const [showConfetti, setShowConfetti] = useState(false);
  const { state } = useContext<any>(QuizContext);
  const { questions, selectedAnswer } = state;
  const [userAnswer, setUserAnswer] = useState<any[]>([]);

  useEffect(() => {
    const saveAnswers = localStorage.getItem("selectedAnswer");
    if (saveAnswers) {
      setUserAnswer(JSON.parse(saveAnswers));
    }
  }, []);

  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handelConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div
      className={`dark  w-screen  h-screen pb-12 pt-4 overflow-x-hidden ${
        isDarkMode ? "bg-slate-900" : " bg-green-600"
      }`}
    >
      <div
        onClick={handelDarkMode}
        className={`${
          isDarkMode ? "bg-green-500" : "bg-green-800"
        } absolute top-8 left-4 w-10 h-10 rounded-full flex justify-center items-center`}
      >
        <IoMoon color={`${isDarkMode ? "white" : ""}`} size={"30px"} />
      </div>
      {showConfetti && <Confetti />}
      <div className="flex justify-center items-center">
        <button onClick={handelConfetti}>
          <h1 className="mt-8 font-bold text-2xl text-white bg-green-500 px-6 py-2 rounded-md">
            Your Review
          </h1>
        </button>
      </div>
      <div className="flex justify-center items-center gap-6 mt-4 ">
        <div className="bg-green-900  py-4 px-4 w-[80%]  flex flex-col gap-4 rounded-md justify-center items-center">
          {questions.map((question: any, index: number) => {
            const options = [
              ...question.incorrect_answers,
              question.correct_answer,
            ];
            const userSelected = userAnswer[index];
            const correctAnswer = question.correct_answer;
            return (
              <div
                className="bg-yellow-200 w-full rounded-lg py-4 px-8 flex gap-6 flex-col"
                key={index}
              >
                <h1 className="text-2xl font-bold text-white">
                  {question.question}
                </h1>
                <div className="grid grid-cols-2 gap-8">
                  {options.map((option, i) => {
                    let bgColor = "yellow.300";
                    if (userSelected === option) {
                      if (userSelected === correctAnswer) {
                        bgColor = "green.500";
                      } else {
                        bgColor = "red.500";
                      }
                    } else if (option === correctAnswer) {
                      bgColor = "green.500";
                    }

                    return (
                      <Button
                        color={"white"}
                        bg={bgColor}
                        rounded={"md"}
                        key={i}
                      >
                        {option}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <StarBorder className="bg-green-500  w-[300px]">
          Back To Results
        </StarBorder>
      </div>
    </div>
  );
}
