export default function QuizCompleted({
  userAnswers,
  questions,
  score,
  handleRestart,
}) {
  const getFeedback = () => {
    if (score === questions)
      return "You're a genius, like Dexter from Dexter's Lab!";
    if (score >= questions * 0.8)
      return "You're almost there, like Scooby-Doo solving mysteries!";
    if (score >= questions / 2)
      return "You're Patrick Star... but hey, at least you answered something!";
    if (score > 0)
      return "CIVILIAN ALERT! That's a misfire! You're the guy the Avengers save, not recruit.";
    return "ZERO??? REALLY??? DID YOU EVEN HAVE A CHILDHOOD????";
  };

  const getTrophyImage = () => {
    if (score === questions) return "/gold.jpeg";
    if (score >= questions * 0.8) return "/silver.jpg";
    if (score >= questions / 2) return "/bronze.jpeg";
    if (score > 0) return "/broken.jpeg";
    return "/broken.jpeg";
  };

  return (
    <div className="font-[Bangers] flex flex-col justify-center items-center min-h-screen sm:h-[80vh] gap-y-4 sm:gap-y-6 px-2 sm:px-4">
      <div className="shadow-[4px_4px_0px_0px_black] border-4 p-4 sm:p-8 text-center bg-white animate-bounce-in w-full max-w-xs sm:max-w-md md:max-w-2xl">
        <img
          src={getTrophyImage()}
          alt="Award"
          className="w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto mb-4 sm:mb-6 border-2 border-black rounded-full"
        />
        <h1
          className="text-2xl sm:text-4xl text-center font-extrabold text-purple-700 uppercase mb-2 sm:mb-4"
          style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
        >
          Quiz Completed!
        </h1>
        <p className="text-lg sm:text-2xl text-center font-bold text-gray-900 mb-1 sm:mb-2">
          You scored {score} out of {questions}
        </p>
        <p className="text-lg sm:text-2xl font-semibold text-pink-600">{getFeedback()}</p>
        <button
          className="mt-4 w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 border-4 border-black text-black font-extrabold py-2 sm:py-2 px-4 sm:px-6 text-lg sm:text-xl uppercase hover:cursor-pointer hover:shadow-[4px_4px_0px_0px_black] shadow-[4px_4px_0px_0px_black] transform hover:scale-105"
          onClick={handleRestart}
        >
          Play Again 🎮
        </button>
      </div>
    </div>
  );
}
