import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import SubjectList from "./components/SubjectList";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const semester = 5;
  const year = "III";

  const subjects = ["React", "Java", "Python", "SQL", "DBMS"];

  return (
    <div className="container">

      <Header />

      <StudentCard
        name="Suji"
        regno="101"
        department="CSE"
        year="III"
        cgpa={8.5}
        attendance={82}
        photo="https://via.placeholder.com/150"
      />

      <SubjectList
        semester={semester}
        year={year}
        subjects={subjects}
      />

      <Footer />

    </div>
  );
}

export default App;