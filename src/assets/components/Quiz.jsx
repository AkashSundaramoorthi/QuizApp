import { useState } from "react";
import questions from "../../../questions";
import MenuCard from "./MenuCard";
import CategorySelection from "./CategorySelection";
import QuizCompleted from "./QuizCompleted";
import QuestionCard from "./QuestionCard";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [showMenu, setShowMenu] = useState(true); 

  const activeQuestionIndex = userAnswers.length;
  const quizComplete = activeQuestionIndex >= questions.length;

  function handleSelectAnswer(answer) {
    setSelectedAnswer(answer);
  }

  function handleSkipQuestion() {
    setShowEvaluation(true);
    setSelectedAnswer(null); 
  }

  function handleNextQuestion() {
    if (!showEvaluation) {
      setShowEvaluation(true);
      return;
    }
    setUserAnswers((prev) => [...prev, selectedAnswer]);
    if (selectedAnswer === questions[activeQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(null);
    setShowEvaluation(false);
  }

  function handleRestart() {
    setScore(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setGameStarted(false);
    setSelectedCategory(null);
    setShowMenu(true); 
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  function handleStart() {
    setShowMenu(false); 
    setSelectedAnswer(null);
    setUserAnswers([]);
    setScore(0);
    setGameStarted(false);
    setSelectedCategory(null);
  }

  function handleBackToMenu() {
    setShowMenu(true);
    setSelectedCategory(null);
    setGameStarted(false);
  }

  function handleCategoryStart() {
    setGameStarted(true);
  }

  return (
    <>
      {showMenu ? (
        <MenuCard handleStart={handleStart} />
      ) : !gameStarted ? (
        <CategorySelection
          handleSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
          handleStart={handleCategoryStart}
          handleBackToMenu={handleBackToMenu}
        />
      ) : quizComplete ? (
        <QuizCompleted
          userAnswers={userAnswers.filter(Boolean).length}
          questions={questions.length}
          score={score}
          handleRestart={handleRestart}
        />
      ) : (
        <QuestionCard
          userAnswers={userAnswers}
          activeQuestionIndex={activeQuestionIndex}
          handleSelectAnswer={handleSelectAnswer}
          selectedAnswer={selectedAnswer}
          handleNextQuestion={handleNextQuestion}
          handleSkipQuestion={handleSkipQuestion}
          showEvaluation={showEvaluation}
        />
      )}
    </>
  );
}
