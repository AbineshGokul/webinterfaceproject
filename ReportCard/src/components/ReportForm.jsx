import { useState } from "react";

function ReportForm({ addStudent }) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !grade || !subject || !marks) {
      alert("Please fill all fields");
      return;
    }

    addStudent({
      name,
      grade,
      subject,
      marks: Number(marks)
    });

    setName("");
    setGrade("");
    setSubject("");
    setMarks("");
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <h2>Student Details</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        min="0"
        max="100"
      />

      <button type="submit">Generate Report Card</button>
    </form>
  );
}

export default ReportForm;