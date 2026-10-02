function StudentCard(props) {

  return (
    <div className="student-card">

      <div className="photo-area">

        <img
          src={props.photo}
          alt="Student"
          className="student-photo"
        />

      </div>

      <div className="student-info">

        {/* Student Name - Blue */}
        <h2 style={{ color: "blue" }}>
          {props.name}
        </h2>

        <p>
          <b>Register Number:</b> {props.registerNo}
        </p>

        <p>
          <b>Department:</b> {props.department}
        </p>

        <p>
          <b>Year:</b> {props.year}
        </p>

        {/* CGPA - Green */}
        <p style={{ color: "green" }}>
          <b>CGPA:</b> {props.cgpa}
        </p>

        {/* Attendance - Orange */}
        <p style={{ color: "orange" }}>
          <b>Attendance:</b> {props.attendance}%
        </p>

        {/* Attendance Conditional Rendering */}

        <div className="status">

          <h3>Attendance Status</h3>

          {props.attendance >= 75 ? (
            <p className="eligible">
              Eligible for Semester Exam
            </p>
          ) : (
            <p className="not-eligible">
              Not Eligible
            </p>
          )}

        </div>

        {/* Placement Conditional Rendering */}

        <div className="status">

          <h3>Placement Status</h3>

          {props.cgpa >= 8 ? (
            <p className="eligible">
              Eligible
            </p>
          ) : (
            <p className="not-eligible">
              Need Improvement
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default StudentCard;