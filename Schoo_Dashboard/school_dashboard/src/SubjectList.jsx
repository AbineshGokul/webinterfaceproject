function SubjectList(props) {

  return (
    <div className="subject-card">

      <h2>Academic Details</h2>

      <p>
        <b>Current Semester:</b> {props.semester}
      </p>

      <p>
        <b>Current Year:</b> {props.year}
      </p>

      <p>
        <b>Total Subjects:</b> {props.subjects.length}
      </p>

      <h3>Subjects</h3>

      <ul>

        {props.subjects.map((subject, index) => (
          <li key={index}>
            {subject}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default SubjectList;