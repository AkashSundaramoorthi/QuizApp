export default function ProgressBar({ activeQuestionIndex, questions }) {
  return (
    <div className="w-full bg-gray-200 h-4 mb-6">
      <div
        className="h-4 transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-600"
        style={{
          width: `${(activeQuestionIndex / questions) * 100}%`,
        }}
      ></div>
    </div>
  );
}
