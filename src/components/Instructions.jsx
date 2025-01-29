// src/components/Instructions.jsx
export function Instructions({ onHideInstructions }) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md border border-primary-100 max-w-2xl mx-auto text-center">
			<h2 className="text-2xl font-bold text-primary-800 mb-4">
				Welcome to the Daily Routine Activity!
			</h2>
			<p className="text-lg text-primary-700 mb-4">
				In this activity, you will practice describing your daily routine in
				English. Here's how it works:
			</p>
			<ul className="text-left list-disc list-inside text-primary-700 mb-6">
				<li>Read the question for each activity.</li>
				<li>Type your answer in the input field.</li>
				<li>Click "Show Help" if you need a hint.</li>
				<li>Click "Check Answers" to see if your answers are correct.</li>
			</ul>
			<button
				onClick={onHideInstructions}
				className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
				I Understand, Let's Start!
			</button>
		</div>
	);
}
