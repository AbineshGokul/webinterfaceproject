import photo from "./assets/abinesh.jpeg";

function StudentProfile(props) {
  return (
    <div className="card">
      <img src={photo} alt="Student" className="profile-img" />

      <h2>{props.name}</h2>
      <p><strong>ID:</strong> {props.id}</p>
      <p><strong>Department:</strong> {props.dept}</p>
    </div>
  );
}

export default StudentProfile;