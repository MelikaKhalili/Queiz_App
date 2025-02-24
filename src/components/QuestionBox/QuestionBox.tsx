import { Button } from "@chakra-ui/react";
import { useMemo } from "react";
import SplitText from "../SplitText/SplitText";
import "./QuestionBox.css";
export default function QuestionBox({
  question,
  handelAnswerClick,
  selectedAnswer,
  setSelectedAnswer,
  hasAnswerd,
  setHasAnswerd,
}: any): any {
  const answers = [question?.correct_answer, ...question.incorrect_answers];
  console.log(question);
  const ShafelAnwers = () => {
    return answers.sort(() => Math.random() - 0.5);
  };
  const shafeledAnswer = useMemo(ShafelAnwers, [question]);
  console.log(question);
  return (
    <>
      <div className="px-4 question-container">
        <div className="bg-[#50C878] w-full sm:w-[500px] md:w-[600px] max-w-full h-auto sm:h-[100px] md:h-[120px] rounded-md py-2 px-6 shadow-xl border-2 border-green-400 question-box">
          <p className="font-serif text-lg text-white question-text overflow-hidden line-clamp-3">
            {question.question}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 answer-grid">
          {shafeledAnswer.map((option: any, i: any) => (
            <div
              className="flex justify-center items-center gap-12 mt-6 answer-container"
              key={i}
            >
              <Button
                onClick={() =>
                  handelAnswerClick(option, question.correct_answer)
                }
                disabled={selectedAnswer === option}
                border={"2px"}
                borderColor={
                  selectedAnswer === option ? "yellow.400" : " #50C878"
                }
                minWidth={"50px"}
                color={"white"}
                bg={selectedAnswer === option ? "yellow.400" : "#2ECC71"}
                className="text-wrap answer-button"
              >
                <SplitText text={option} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
