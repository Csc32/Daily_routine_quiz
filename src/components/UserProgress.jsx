// src/components/UserProgress.jsx
export function UserProgress({ submittedName, feedbacks }) {
	// Calculate total points
	const totalPoints = Object.values(feedbacks).filter(
		(feedback) => feedback?.text === "Correct! Well done! ✅",
	).length;

	return (
		<div className="bg-white p-4 rounded-lg shadow-md border border-primary-100 mb-6">
			<h3 className="text-xl font-bold text-primary-800">
				Welcome, {submittedName}!
			</h3>
			<p className="text-lg text-primary-700">
				Your total points: <strong>{totalPoints}</strong> /{" "}
				{Object.keys(feedbacks).length}
			</p>
		</div>
	);
}
