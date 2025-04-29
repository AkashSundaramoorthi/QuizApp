import { useEffect, useState } from "react";

export default function QuestionTimer({ time, onTimeOut }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    setTimeLeft(time);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 100) {
          clearInterval(interval);
          onTimeOut();
          return 0;
        }
        return prevTimeLeft - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onTimeOut]);

  const percentage = (timeLeft / time) * 100;

  return (
    <div className="w-full bg-gray-200 h-4 mb-6">
      <div
        className="h-4 transition-all duration-500 bg-gradient-to-r from-red-500 to-orange-500"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
}
