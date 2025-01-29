export function Field({
	title,
	placeholder,
	name,
	setName,
	submittedName,
	handleSubmit,
}) {
	return (
		<div className="p-4">
			<form onSubmit={handleSubmit} className="space-y-4">
				<label className="block text-sm font-medium text-primary-700">
					{title}
				</label>
				<input
					type="text"
					placeholder={placeholder}
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-1 block w-full px-3 py-2 border border-primary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
				/>
				<button
					type="submit"
					className="text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
					Submit
				</button>
			</form>
		</div>
	);
}
