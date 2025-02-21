import { Button } from "@chakra-ui/react";
import { useMemo } from "react";

export default function QuestionBox({
  question,
  handelAnswerClick,
  selectedAnswer,
  setSelectedAnswer,
  hasAnswerd,
  setHasAnswerd,
}: any): any {
  const answers = [question.correct_answer, ...question.incorrect_answers];
  console.log(question);
  const ShafelAnwers = () => {
    return answers.sort(() => Math.random() - 0.5);
  };
  const shafeledAnswer = useMemo(ShafelAnwers, [question]);
  console.log(question);
  return (
    <>
      <div className="question-card">
        <div className="bg-[#50C878] w-[600px] rounded-md py-1 px-6 shadow-xl border-2 border-green-400">
          <p className="font-serif text-lg text-white">{question.question}</p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          {shafeledAnswer.map((option: any, i: any) => (
            <div
              className="flex justify-center items-center gap-12 mt-6"
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
                className="text-wrap"
              >
                {option}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
