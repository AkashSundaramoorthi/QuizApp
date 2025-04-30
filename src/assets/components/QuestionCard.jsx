import ProgressBar from "./ProgressBar";
import QuestionTimer from "./QuestionTimer";
import questions from "../../../questions";

export default function QuestionCard({
  handleSelectAnswer,
  activeQuestionIndex,
  selectedAnswer,
  userAnswers,
  handleNextQuestion,
  handleSkipQuestion,
  showEvaluation,
}) {
  const currentQuestion = questions[activeQuestionIndex];

  return (
    <div className="font-[Bangers] flex flex-col items-center justify-center min-h-screen sm:min-h-[80vh] px-1 sm:px-4 md:px-8 py-2 sm:py-8">
      <p className="text-base sm:text-lg mb-2">
        You have completed {userAnswers.filter(Boolean).length} out of{" "}
        {questions.length}
      </p>
      <ProgressBar
        activeQuestionIndex={activeQuestionIndex}
        questions={questions.length}
      />
      <QuestionTimer
        key={activeQuestionIndex}
        time={8000}
        onTimeOut={handleSkipQuestion}
      />
      <div className="p-2 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-md md:max-w-2xl  text-neutral-950 bg-neutral-50 border-4 border-b-black shadow-[8px_8px_0px_0px_black] mt-2 sm:mt-4 flex flex-col">
        <div className="min-h-[3.5rem] sm:min-h-[4.5rem] flex items-center justify-center">
          <h2 className="text-base sm:text-2xl text-center m-0">
            Q{activeQuestionIndex + 1}. {currentQuestion.question}
          </h2>
        </div>
        <ul className="space-y-2 flex-1 flex flex-col justify-center ">
          {currentQuestion.options.map((answer, index) => {
            let btnClass =
              "text-base sm:text-xl tracking-wider font-bold shadow-[4px_4px_0px_0px_black] cursor-pointer w-full min-h-[1.5rem] flex items-center justify-center py-2 sm:py-3 px-2 sm:px-6 transition-colors duration-200 hover:shadow-[4px_4px_0px_0px_black] transform hover:scale-105 border-4 border-black ";

            if (showEvaluation) {
              if (answer === currentQuestion.answer) {
                btnClass += "bg-green-500 text-white";
              } else if (answer === selectedAnswer) {
                btnClass += "bg-red-500 text-white";
              } else {
                btnClass += "bg-blue-700 text-neutral-50";
              }
            } else {
              btnClass +=
                selectedAnswer === answer
                  ? "text-neutral-950"
                  : "bg-blue-700 hover:bg-blue-600 text-neutral-50";
            }

            return (
              <li key={index} className="w-full">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={btnClass}
                  disabled={showEvaluation}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-2 sm:mt-4 flex flex-row justify-between gap-2 sm:gap-4">
          <button
            onClick={handleSkipQuestion}
            className="tracking-wider text-base sm:text-xl py-2 sm:py-3 font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[4px_4px_0px_0px_black] px-4 sm:px-16 border-4 border-black cursor-pointer transform hover:scale-105 w-1/2 sm:w-auto"
          >
            Skip
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={!showEvaluation && selectedAnswer === null}
            className={`text-base sm:text-xl py-2 sm:py-3 px-4 sm:px-8 shadow-[4px_4px_0px_0px_black] text-black border-4 border-black font-bold w-1/2 sm:w-auto
              ${
                selectedAnswer === null && !showEvaluation
                  ? "bg-gray-400 cursor-not-allowed opacity-50 text-gray-300"
                  : "cursor-pointer transform hover:scale-105 hover:shadow-[4px_4px_0px_0px_black] shadow-[4px_4px_0px_0px_black]"
              }`}
          >
            {showEvaluation ? "Continue" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}
