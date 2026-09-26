function Project() {
  return (
    <section className="page">

      <h1>My Projects</h1>

      <div className="cards">

        <div className="card">
          <h2>CoServe</h2>

          <p>
            A cooperative service platform connecting customers
            with local service workers.
          </p>

          <span>React | MySQL | JavaScript</span>
        </div>

        <div className="card">
          <h2>College Trip Portal</h2>

          <p>
            A web application for managing college trips,
            destinations and travel information.
          </p>

          <span>React | Router | CSS</span>
        </div>

        <div className="card">
          <h2>Library Management</h2>

          <p>
            A database application for managing books,
            authors and library records.
          </p>

          <span>MySQL | SQL | DBMS</span>
        </div>

        <div className="card">
          <h2>Student Dashboard</h2>

          <p>
            A React dashboard for displaying student
            academic and attendance information.
          </p>

          <span>React | JavaScript | CSS</span>
        </div>

      </div>

    </section>
  );
}

export default Project;