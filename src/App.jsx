import { useState } from "react";
import "./App.css";
import { Field } from "./components/Field";
import { DisplayName } from "./components/DisplayName";
import { DailyRoutineActivity } from "./components/DailyRoutineActivity";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <section className="bg-primary-100 flex flex-col justify-start items-center gap-5 min-h-52 grow-1">
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
            <DisplayName submittedName={submittedName}></DisplayName>
            <button
              className="text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
              onClick={() => setSubmittedName(false)}
            >
              Reset
            </button>
          </section>
        )}
      </section>
      <main className="flex flex-col justify-center items-center">
        <DailyRoutineActivity></DailyRoutineActivity>
      </main>
    </section>
  );
}

export default App;
