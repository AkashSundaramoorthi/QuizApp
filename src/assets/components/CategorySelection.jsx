import { useState } from "react";

export default function Menu({
  handleSelectCategory,
  selectedCategory,
  handleStart,
  handleBackToMenu,
}) {
  const categories = [
    "Epic Cartoons",
    "Blockbuster Movies",
    "Karaoke Hits",
    "Gamer's Paradise",
  ];
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === "Epic Cartoons") {
      handleSelectCategory(category);
    } else {
      setWrongAnswer(true);
      setTimeout(() => {
        setWrongAnswer(false);
        if (handleBackToMenu) handleBackToMenu();
      }, 1000);
    }
  };

  return (
    <div className="font-[Bangers] flex flex-col items-center justify-center min-h-[80vh] px-2 sm:px-4 md:px-8">
      <div className="text-center p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-md md:max-w-2xl h-auto text-neutral-950 bg-neutral-50 border-4 border-b-black shadow-[6px_6px_0px_0px_black]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">MENU</h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl mt-2">CHOOSE THE CORRECT CATEGORY</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-6">
          {categories.map((category, index) => {
            let btnClass =
              "w-full text-lg sm:text-xl tracking-wider font-bold shadow-[4px_4px_0px_0px_black] cursor-pointer py-2 sm:py-3 px-4 sm:px-6 transition-colors duration-200 hover:shadow-[4px_4px_0px_0px_black] transform hover:scale-105 border-4 border-black ";

            btnClass +=
              selectedCategory === category
                ? "text-neutral-950"
                : "bg-blue-700 hover:bg-blue-600 text-neutral-50";

            return (
              <li key={index} className="flex justify-center">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`${btnClass}`}
                  disabled={!!selectedCategory || wrongAnswer}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
        {wrongAnswer && (
          <div className="mt-8">
            <p className="text-lg sm:text-2xl text-red-600 font-bold">
              Oops! Not quite there... Try again, genius!
            </p>
          </div>
        )}
        {selectedCategory && (
          <div className="mt-8">
            <p className="text-lg sm:text-2xl mb-4">Selected: {selectedCategory}</p>
            {selectedCategory === "Epic Cartoons" && (
              <button
                onClick={handleStart}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 border-4 border-black shadow-[4px_4px_0px_0px_black] transform hover:scale-105 cursor-pointer text-lg sm:text-xl"
              >
                Start the Fun!
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
