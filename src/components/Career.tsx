import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma</h4>
                <h5>Computer Engineering</h5>
              </div>
              <h3>2022 - 2025</h3>
            </div>
            <p>
              Completed diploma studies, gaining foundational knowledge in software development, programming logic, and systems design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech</h4>
                <h5>Computer Science & Engineering</h5>
              </div>
              <h3>2025 - 2028</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Technology degree. Focusing on advanced software engineering concepts, full-stack development, and modern technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
