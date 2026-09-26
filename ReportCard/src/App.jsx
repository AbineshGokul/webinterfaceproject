import { useState } from "react";
import ReportForm from "./components/ReportForm";
import ReportCard from "./components/ReportCard";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app">
      <h1>Student Report Card</h1>

      <ReportForm addStudent={addStudent} />

      <ReportCard students={students} />
    </div>
  );
}

export default App;