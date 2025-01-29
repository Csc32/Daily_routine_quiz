export function DisplayName({ submittedName }) {
  return (
    <input
      readOnly="true"
      value={submittedName}
      className="mt-2 block w-full px-4 py-2 bg-primary-50 border border-primary-200 rounded-md shadow-sm text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
    />
  );
}
