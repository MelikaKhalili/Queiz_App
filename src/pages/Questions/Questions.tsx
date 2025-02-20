import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import { useCategory } from "../../components/CategoryProvider/CategoryProvider";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import { QuizContext } from "../../components/QuestionsProvider/QuestionsProvider";
import { fetchQuestions } from "../../services/getDataSetup";
import "./Questions.css";

export default function Questions() {
  const { isLightMode, setIsLightMode } = useContext<any>(ThemeContext);
  const { state, dispatch } = useContext<any>(QuizContext);
  const { queizSettings } = state;
  const [questions, setQuestions] = useState<any[]>([]);
  const { category } = useCategory();
  const navigate = useNavigate();
  const handelNext = () => {
    if (state.currentQuestionIndex < questions.length - 1) {
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
    const getQuestions = async () => {
      try {
        const data = await fetchQuestions({
          count: queizSettings.numberOfQueizs,
          cat: categoryId,
          dif: queizSettings.difficulty.toLowerCase(),
        });
        setQuestions(data.results);
        console.log("Fetched Questions:", data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    if (
      queizSettings.category &&
      queizSettings.difficulty &&
      queizSettings.numberOfQueizs
    ) {
      getQuestions();
    }
  }, [queizSettings, categoryId]);

  const handelAnswerClick = (
    selectedOption: string,
    correct_answer: string
  ) => {
    if (selectedOption === correct_answer) {
      dispatch({ type: "SCORE" });
    }

    if (state.currentQuestionIndex === questions.length - 1) {
      setTimeout(() => navigate("/result"), 3000);
    } else {
      dispatch({
        type: "NEXT_QUEZTION",
        payload: state.currentQuestionIndex + 1,
      });
    }
  };

  return (
    <div
      className={`dark w-screen h-screen overflow-hidden flex justify-center items-center`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <GreenWaveBackGround className="flex justify-center items-center w-screen" />
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

        <div className="questions-box glass-box flex justify-center items-center">
          {questions.length > 0 &&
            state.currentQuestionIndex < questions.length && (
              <div className="question-card">
                <div className="bg-[#50C878] w-[600px] rounded-md py-1 px-6 shadow-xl border-2 border-green-400">
                  <p className="font-serif text-lg text-white">
                    {questions[state.currentQuestionIndex].question}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  {questions[state.currentQuestionIndex].incorrect_answers
                    .concat(
                      questions[state.currentQuestionIndex].correct_answer
                    )
                    .sort(() => Math.random() - 0.5)
                    .map((option: any, i: any) => (
                      <div
                        className="flex justify-center items-center gap-12 mt-6"
                        key={i}
                      >
                        <Button
                          onClick={() =>
                            handelAnswerClick(
                              option,
                              questions[state.currentQuestionIndex]
                                .correct_answer
                            )
                          }
                          border={"2px"}
                          height={"50px"}
                          borderColor={"#50C878"}
                          width={"200px"}
                          color={"white"}
                          bg={"#2ECC71"}
                          className="option"
                        >
                          <p>{option}</p>
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            )}
        </div>
      </div>
      <div className="flex gap-8 absolute bottom-8 right-10">
        <Button
          onClick={handelNext}
          bg={"#D35400"}
          color={"white"}
          rounded={"full"}
        >
          <div className="flex justify-center items-center gap-2">
            <IoIosArrowDropleft />
            <p>Next Quezstion</p>
          </div>
        </Button>
        <Button
          onClick={handlePrevious}
          bg={"#00CED1"}
          color={"white"}
          rounded={"full"}
        >
          <div className="flex justify-center items-center gap-2">
            <p>Previous question</p>
            <IoIosArrowDropright />
          </div>
        </Button>
      </div>
    </div>
  );
}
