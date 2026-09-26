function StudentCard(props) {

  return (
    <div className="card">

      <img src={props.photo} alt="Student" />

      <h2 style={{ color: "blue" }}>
        {props.name}
      </h2>

      <p>
        <b>Register No :</b> {props.regno}
      </p>

      <p>
        <b>Department :</b> {props.department}
      </p>

      <p>
        <b>Year :</b> {props.year}
      </p>

      <p style={{ color: "green" }}>
        <b>CGPA :</b> {props.cgpa}
      </p>

      <p style={{ color: "orange" }}>
        <b>Attendance :</b> {props.attendance}%
      </p>

      <h3>Attendance Status</h3>

      {props.attendance >= 75 ?
        <p>Eligible for Semester Exam</p>
        :
        <p>Not Eligible</p>
      }

      <h3>Placement Status</h3>

      {props.cgpa >= 8 ?
        <p>Eligible</p>
        :
        <p>Need Improvement</p>
      }

    </div>
  );
}

export default StudentCard;