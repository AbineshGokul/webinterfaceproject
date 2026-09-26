
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent() {
    if (name === "") {
      alert("Enter student name");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      present: false
    };

    setStudents([...students, newStudent]);
    setName("");
  }

  function markPresent(id) {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          present: true
        };
      }

      return student;
    });

    setStudents(updatedStudents);
  }

  function markAbsent(id) {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          present: false
        };
      }

      return student;
    });

    setStudents(updatedStudents);
  }

  const total = students.length;

  const present = students.filter(
    (student) => student.present === true
  ).length;

  const absent = total - present;

  const percentage =
    total === 0 ? 0 : Math.round((present / total) * 100);

  return (
    <div className="container">

      <h1>Attendance Tracker</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addStudent}>
          Add Student
        </button>
      </div>

      <div className="summary">
        <div>
          <h3>Total</h3>
          <p>{total}</p>
        </div>

        <div>
          <h3>Present</h3>
          <p>{present}</p>
        </div>

        <div>
          <h3>Absent</h3>
          <p>{absent}</p>
        </div>

        <div>
          <h3>Attendance</h3>
          <p>{percentage}%</p>
        </div>
      </div>

      <div className="student-list">

        {students.map((student, index) => (
          <div className="student" key={student.id}>

            <span>
              {index + 1}. {student.name}
            </span>

            <div>
              <button
                className="present-btn"
                onClick={() => markPresent(student.id)}
              >
                Present
              </button>

              <button
                className="absent-btn"
                onClick={() => markAbsent(student.id)}
              >
                Absent
              </button>
            </div>

            <strong>
              {student.present ? "Present" : "Absent"}
            </strong>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
