import { useState } from "react";

const routineExercises = [
  {
    id: 1,
    time: "6:00 AM",
    image: "🛏️",
    correctAnswer: "I wake up at 6 AM",
    hint: "Use 'wake up' to describe this action",
  },
  {
    id: 2,
    time: "6:30 AM",
    image: "🚿",
    correctAnswer: "I take a shower",
    hint: "Use 'take a shower' to describe this action",
  },
  {
    id: 3,
    time: "7:00 AM",
    image: "🥣",
    correctAnswer: "I eat breakfast",
    hint: "Use 'eat breakfast' to describe this action",
  },
];

export function DailyRoutineActivity() {
  const [feedbacks, setFeedbacks] = useState({});

  const checkAnswer = (id, userAnswer) => {
    const exercise = routineExercises.find((ex) => ex.id === id);
    if (
      userAnswer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase()
    ) {
      setFeedbacks((prev) => ({
        ...prev,
        [id]: {
          text: "Correct! Well done! ✅",
          className: "mt-2 text-emerald-600 font-medium",
        },
      }));
    } else {
      setFeedbacks((prev) => ({
        ...prev,
        [id]: {
          text: "Try again! ❌",
          className: "mt-2 text-rose-600 font-medium",
        },
      }));
    }
  };

  const showHint = (id) => {
    const exercise = routineExercises.find((ex) => ex.id === id);
    setFeedbacks((prev) => ({
      ...prev,
      [id]: {
        text: `Hint: ${exercise.hint}`,
        className: "mt-2 text-primary-600 font-medium",
      },
    }));
  };

  return (
    <div id="activity-section" className="space-y-8">
      <h2 className="text-2xl font-bold text-primary-800 mb-4">
        Complete Your Daily Routine
      </h2>

      {routineExercises.map((exercise) => (
        <div
          key={exercise.id}
          className="bg-white p-6 rounded-lg shadow-md border border-primary-100"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{exercise.image}</span>
            <span className="text-xl font-medium text-primary-700">
              {exercise.time}
            </span>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              id={`answer-${exercise.id}`}
              placeholder="Write what you do at this time..."
              className="w-full p-2 border rounded-md border-primary-200 focus:border-primary-500 focus:ring-primary-500"
              onBlur={(e) => checkAnswer(exercise.id, e.target.value)}
            />

            <div className="flex gap-2">
              <button
                onClick={() =>
                  checkAnswer(
                    exercise.id,
                    document.getElementById(`answer-${exercise.id}`).value,
                  )
                }
                className="check-answer-btn flex-1 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Check Answer
              </button>

              <button
                onClick={() => showHint(exercise.id)}
                className="show-hint-btn flex-1 bg-primary-100 text-primary-700 px-4 py-2 rounded-md hover:bg-primary-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Show Hint
              </button>
            </div>

            {feedbacks[exercise.id] && (
              <p
                id={`feedback-${exercise.id}`}
                className={feedbacks[exercise.id].className}
              >
                {feedbacks[exercise.id].text}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
