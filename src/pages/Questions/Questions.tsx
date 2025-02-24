import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import { useCategory } from "../../components/CategoryProvider/CategoryProvider";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import { QuizContext } from "../../components/QuestionsProvider/QuestionsProvider";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import "./Questions.css";

export default function Questions() {
  const { isLightMode, setIsLightMode } = useContext<any>(ThemeContext);
  const { state, dispatch } = useContext<any>(QuizContext);
  const { queizSettings } = state;
  const { category } = useCategory();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<any[]>([]);
  console.log(setSelectedAnswer);
  const [hasAnswerd, setHasAnswerd] = useState<boolean>(false);
  useEffect(() => {
    localStorage.setItem("selectedAnswer", JSON.stringify(selectedAnswer));
  }, [selectedAnswer]);

  const handelNext = () => {
    if (!hasAnswerd) return;
    if (state.currentQuestionIndex < state.questions.length - 1) {
      dispatch({
        type: "NEXT_QUEZTION",
        payload: state.currentQuestionIndex + 1,
      });
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestionIndex > 0) {
      dispatch({
        type: "PREV_QUESTION",
        payload: state.currentQuestionIndex - 1,
      });
    }
  };

  const handelDarkMode = () => {
    setIsLightMode(!isLightMode);
  };

  const selectedCategory = category.find(
    (cat: any) => cat.name === queizSettings.category
  );
  const categoryId = selectedCategory ? selectedCategory.id : null;

  useEffect(() => {
    if (
      state.currentQuestionIndex === state.questions.length - 1 &&
      hasAnswerd
    ) {
      setTimeout(() => navigate("/results"), 8000);
    }
  }, [
    state.currentQuestionIndex,
    state.questions.length,
    hasAnswerd,
    navigate,
  ]);

  const handelAnswerClick = (
    selectedOption: string,
    correct_answer: string
  ) => {
    const currentIndex = state.currentQuestionIndex;

    setSelectedAnswer((prevAnswers: any[]) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentIndex] = selectedOption;
      return updatedAnswers;
    });

    if (hasAnswerd) {
      return;
    }

    if (selectedOption === correct_answer) {
      dispatch({ type: "SCORE" });
    }

    setHasAnswerd(true);
  };

  return (
    <div className="dark w-screen h-screen overflow-hidden flex justify-center items-center quiz-container">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0 overlay"></div>
      <GreenWaveBackGround className="flex justify-center items-center w-screen background-wave" />

      <div
        className={`absolute flex flex-col z-10 w-[60%] h-[70%] rounded-2xl border-4 border-white quiz-content ${
          isLightMode ? "bg-green-300" : "Background"
        }`}
      >
        <div className="flex justify-between w-full px-12 quiz-header">
          <h1
            className={`text-[40px] font-bold text-stroke-green py-6 text-start quiz-title ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            QUIZLY
          </h1>
          <button
            onClick={handelDarkMode}
            className={`w-[43px] h-[43px] rounded-[100%] mt-8 darkmode-button ${
              isLightMode ? "bg-green-900" : "bg-green-400"
            }`}
          >
            <img
              className="translate-x-[50%] darkmode-img"
              src={IconDarkMode}
              alt="IconDarkMode"
            />
          </button>
        </div>

        <div
          key={state.currentQuestionIndex}
          className="myAnim questions-box glass-box flex justify-center items-center question-container"
        >
          <QuestionBox
            hasAnswerd={hasAnswerd}
            setHasAnswerd={setHasAnswerd}
            question={state.questions[state.currentQuestionIndex]}
            handelAnswerClick={handelAnswerClick}
            selectedAnswer={selectedAnswer[state.currentQuestionIndex]}
            setSelectedAnswer={setSelectedAnswer}
          />
        </div>
      </div>

      <div className="flex gap-8 absolute bottom-8 right-10 quiz-navigation">
        <Button
          onClick={handlePrevious}
          bg={"#00CED1"}
          color={"white"}
          rounded={"full"}
          className="prev-button"
        >
          <div className="flex justify-center items-center gap-2">
            <IoIosArrowDropleft />
            <p className="prev-text">Previous question</p>
          </div>
        </Button>
        <Button
          onClick={handelNext}
          bg={"#D35400"}
          color={"white"}
          rounded={"full"}
          disabled={!hasAnswerd}
          className="next-button"
        >
          <div className="flex justify-center items-center gap-2">
            <p>Next Question</p>
            <IoIosArrowDropright />
          </div>
        </Button>
      </div>
    </div>
  );
}
