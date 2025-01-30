import { useState } from "react";
import { routineExercises } from "../utils/constants";

export function DailyRoutineActivity({ checkAnswer, showHelp, feedbacks }) {
	const [userAnswers, setUserAnswers] = useState({}); // Track user inputs
	const isAllAnswersFilled = routineExercises.every((exercise) =>
		userAnswers[exercise.id]?.trim(),
	);
	// Handle input changes
	const handleInputChange = (id, value) => {
		setUserAnswers((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	// Validate all answers when the "Check Answers" button is clicked
	const handleCheckAllAnswers = () => {
		routineExercises.forEach((exercise) => {
			const userAnswer = userAnswers[exercise.id] || ""; // Get user's answer (default to empty string)
			checkAnswer(exercise.id, userAnswer); // Validate the answer
		});
	};

	return (
		<div
			id="activity-section"
			className="space-y-8 flex flex-col justify-center items-center w-full">
			<h2 className="text-2xl font-bold text-primary-800 mb-4">
				What do you do in the morning, afternoon, or evening?
			</h2>

			{routineExercises.map((exercise) => (
				<div
					key={exercise.id}
					className="bg-white p-6 rounded-lg shadow-md border border-primary-100 w-xl min-h-[28vh]">
					<div className="flex items-center gap-4 mb-4">
						<img className="size-20" src={exercise.image} alt={exercise.alt} />
						<span className="text-xl font-medium text-primary-700">
							{`What do you do in the ${exercise.time}?`}
						</span>
					</div>

					<div className="space-y-4">
						<input
							type="text"
							id={`answer-${exercise.id}`}
							placeholder={`In the ..., I...`}
							className="w-full p-2 border rounded-md border-primary-200 focus:border-primary-500 focus:ring-primary-500"
							value={userAnswers[exercise.id] || ""} // Bind input value to state
							onChange={(e) => handleInputChange(exercise.id, e.target.value)} // Update state on change
						/>

						<div className="flex gap-2">
							<button
								type="button"
								onClick={() => showHelp(exercise.id)}
								className="show-help-btn flex-1 bg-primary-100 text-primary-700 px-4 py-2 rounded-md hover:bg-primary-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
								Show Help
							</button>
						</div>

						{feedbacks[exercise.id] && (
							<p
								id={`feedback-${exercise.id}`}
								className={feedbacks[exercise.id].className}>
								{feedbacks[exercise.id].text}
							</p>
						)}
					</div>
				</div>
			))}

			<button
				className="show-help-btn flex-1 bg-primary-900 text-primary-200 px-4 py-2 rounded-md hover:bg-primary-800 mb-5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
				onClick={handleCheckAllAnswers}>
				Check Answers
			</button>
		</div>
	);
}
