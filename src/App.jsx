import { useState } from "react";
import "./App.css";
import { Field } from "./components/Field";
import { DisplayName } from "./components/DisplayName";
import { DailyRoutineActivity } from "./components/DailyRoutineActivity";
import { UserProgress } from "./components/UserProgress";
import { Instructions } from "./components/Instructions";
import { routineExercises } from "./utils/constants";

function App() {
	const [name, setName] = useState("");
	const [submittedName, setSubmittedName] = useState("");
	const [feedbacks, setFeedbacks] = useState({});
	const [showInstructions, setShowInstructions] = useState(true);

	const hideInstructions = () => {
		setShowInstructions(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedName(name);
	};

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
			return;
		}
		setFeedbacks((prev) => ({
			...prev,
			[id]: {
				text: "Try again! ❌",
				className: "mt-2 text-rose-600 font-medium",
			},
		}));
		return;
	};

	const showHelp = (id) => {
		const exercise = routineExercises.find((ex) => ex.id === id);
		setFeedbacks((prev) => ({
			...prev,
			[id]: {
				text: `Help: ${exercise.help}`,
				className: "mt-2 text-primary-600 font-medium",
			},
		}));
	};

	const onReset = () => {
		setSubmittedName("");
		setFeedbacks({}); // Reset feedbacks to an empty object
	};

	return (
		<section className="bg-primary-100 flex flex-col justify-start items-center gap-5 min-h-52 grow-1">
			{showInstructions && (
				<Instructions onHideInstructions={hideInstructions} />
			)}

			{!showInstructions && (
				<>
					<section className="flex flex-col">
						{!submittedName ? (
							<Field
								title="Enter Your Name"
								placeholder="John Doe"
								name={name}
								setName={setName}
								submittedName={submittedName}
								handleSubmit={handleSubmit}
							/>
						) : (
							<section className="flex flex-row gap-5 justify-center items-center">
								<DisplayName submittedName={submittedName} />
								<button
									className="text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
									onClick={onReset}>
									Reset
								</button>
							</section>
						)}
					</section>

					{submittedName && (
						<UserProgress submittedName={submittedName} feedbacks={feedbacks} />
					)}

					<main className="flex flex-col justify-center items-center w-full">
						<DailyRoutineActivity
							checkAnswer={checkAnswer}
							showHelp={showHelp}
							feedbacks={feedbacks}
						/>
					</main>
				</>
			)}
		</section>
	);
}

export default App;
