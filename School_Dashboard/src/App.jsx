import Header from "./Header";
import StudentCard from "./StudentCard";
import SubjectList from "./SubjectList";
import Footer from "./Footer";
import "./App.css";

import myPhoto from "./assets/coat.jpg";

function App() {

  const student = {
    name: "Abinesh",
    registerNo: "101",
    department: "CSE",
    year: "II",
    cgpa: 8.5,
    attendance: 82,
    photo: myPhoto
  };

  const semester = "IV";

  const subjects = [
    "React",
    "Java",
    "Python",
    "SQL",
    "DBMS"
  ];

  return (
    <div className="dashboard">

      <Header />

      <div className="content">

        <StudentCard
          name={student.name}
          registerNo={student.registerNo}
          department={student.department}
          year={student.year}
          cgpa={student.cgpa}
          attendance={student.attendance}
          photo={student.photo}
        />

        <SubjectList
          semester={semester}
          year={student.year}
          subjects={subjects}
        />

      </div>

      <Footer />

    </div>
  );
}

export default App;