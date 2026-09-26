function ReportCard({ students }) {
  if (students.length === 0) {
    return (
      <div className="report-card empty">
        <h2>Student Report Card</h2>
        <p>No student details available.</p>
      </div>
    );
  }

  const total = students.reduce((sum, student) => sum + student.marks, 0);
  const average = total / students.length;

  return (
    <div className="report-card">
      <h1>STUDENT REPORT CARD</h1>

      <div className="student-info">
        <p>
          <strong>Name:</strong> {students[0].name}
        </p>

        <p>
          <strong>Grade:</strong> {students[0].grade}
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.subject}</td>
              <td>{student.marks}</td>
              <td>{student.marks >= 40 ? "Pass" : "Fail"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <p>
          <strong>Total Marks:</strong> {total}
        </p>

        <p>
          <strong>Average:</strong> {average.toFixed(2)}
        </p>

        <p>
          <strong>Overall Result:</strong>{" "}
          {students.every((student) => student.marks >= 40)
            ? "Pass"
            : "Fail"}
        </p>
      </div>
    </div>
  );
}

export default ReportCard;