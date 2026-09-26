function SubjectList(props) {

  return (
    <div className="subjects">

      <h2>Subjects</h2>

      <p>
        <b>Current Semester :</b> {props.semester}
      </p>

      <p>
        <b>Current Year :</b> {props.year}
      </p>

      <p>
        <b>Total Subjects :</b> {props.subjects.length}
      </p>

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