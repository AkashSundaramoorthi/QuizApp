export default function MenuCard({ handleStart }) {
  return (
    <div className="font-[Bangers] flex flex-col items-center justify-center min-h-[80vh] px-2 sm:px-4 md:px-8">
      <div className="text-center p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-md md:max-w-2xl h-auto text-neutral-950 bg-neutral-50 border-4 border-b-black shadow-[6px_6px_0px_0px_black]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">Welcome to the Quiz Game!</h1>
        <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8">
          Test your knowledge and see how many questions you can answer correctly. Good luck!
        </p>
        <button
          onClick={handleStart}
          className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 border-4 border-black shadow-[4px_4px_0px_0px_black] transform hover:scale-105 cursor-pointer text-lg sm:text-xl"
        >
          Start
        </button>
      </div>
    </div>
  );
}