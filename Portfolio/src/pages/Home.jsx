import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <p>HELLO, I'M</p>

        <h1>
          Abinesh<span>.</span>
        </h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="description">
          I am interested in web development, programming,
          databases and modern technologies.
        </p>

        <div className="buttons">

          <Link to="/projects" className="btn">
            View Projects
          </Link>

          <Link to="/contact" className="btn outline">
            Contact Me
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Home;