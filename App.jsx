export default function App() {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family: "Segoe UI", sans-serif;
          scroll-behavior: smooth;
        }

        body{
          background:#0f172a;
          color:white;
        }

        /* Full-page wrapper to center everything */
        .page-wrapper {
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          width:100vw;
        }

        /* Navbar */
        .navbar{
          width:100%;
          max-width:1100px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:25px 0;
        }

        .logo{
          font-size:26px;
          font-weight:bold;
          color:#38bdf8;
        }

        .nav-links{
          display:flex;
          gap:30px;
        }

        .nav-links a{
          text-decoration:none;
          color:white;
          font-weight:500;
          transition:0.3s;
        }

        .nav-links a:hover{
          color:#38bdf8;
        }

        /* Sections centered both vertically and horizontally */
        section{
          min-height:100vh;
          width:100vw;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          padding:40px 20px;
        }

        h2{
          font-size: 32px;
          margin-bottom: 20px;
          color: #38bdf8;
        }

        .section-text{
          max-width:700px;
          margin:auto;
          color:#cbd5f5;
          line-height:1.6;
        }

        /* Hero */
        .hero h1{
          font-size:3.2rem;
        }
        .hero span{
          color:#38bdf8;
        }
        .hero p{
          margin:20px 0;
          color:#cbd5f5;
          font-size:18px;
        }
        .btn{
          padding:12px 26px;
          background: linear-gradient(45deg,#38bdf8,#0ea5e9);
          border:none;
          border-radius:8px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }
        .btn:hover{
          transform: scale(1.05);
        }

        /* Skills */
        .skills{
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:15px;
          margin-top:20px;
        }
        .skill{
          background:#1e293b;
          padding:10px 20px;
          border-radius:6px;
          font-weight:600;
        }

        /* Projects */
        .projects-grid{
          margin-top:40px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:30px;
          max-width:900px;
          width:90%;
        }
        .card{
          background:#1e293b;
          border-radius:12px;
          overflow:hidden;
          transition:0.3s;
          cursor:pointer;
        }
        .card:hover{
          transform:translateY(-8px);
          box-shadow:0 10px 20px rgba(56,189,248,0.4);
        }
        .card img{
          width:100%;
          height:180px;
          object-fit:cover;
        }
        .card-content{
          padding:20px;
        }
        .card h3{
          color:#38bdf8;
          margin-bottom:10px;
        }

        /* Contact */
        .contact p{
          margin:10px 0;
          color:#cbd5f5;
          font-size:18px;
        }

        /* Footer */
        footer{
          text-align:center;
          padding:30px 0;
          color:#94a3b8;
          border-top:1px solid #1e293b;
          margin-top:40px;
        }
      `}</style>

      <div className="page-wrapper">

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">MyPortfolio</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero" id="home">
          <h1>Hi, I'm <span>Ranjani B</span></h1>
          <p>Frontend Developer | React Developer</p>
          <button className="btn">View My Work</button>
        </section>

        {/* About */}
        <section id="about">
          <h2>About Me</h2>
          <h3 className="section-text">
            I am a passionate web developer who enjoys building modern and responsive
            websites using React, HTML, CSS, and JavaScript. I focus on creating clean
            UI designs and smooth user experiences.
          </h3>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Node.js</div>
            <div className="skill">Git</div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Portfolio Website"/>
              <div className="card-content">
                <h3>Portfolio Website</h3>
                <p>Personal developer portfolio built with React.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80" alt="Todo App"/>
              <div className="card-content">
                <h3>Todo App</h3>
                <p>Task manager application using React Hooks.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80" alt="Weather App"/>
              <div className="card-content">
                <h3>Weather App</h3>
                <p>Weather forecast application using API.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Email: ranjani@gmail.com</p>
          <p>GitHub: github.com/ranjanib</p>
          <p>LinkedIn: linkedin.com/in/ranjanib</p>
        </section>

        <footer>
          © 2026 Ranjani B | Portfolio
        </footer>

      </div>
    </>
  );
}