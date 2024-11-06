import React from "react";
import "./overview.css";
import over1 from "../../Images/overview1.png";
import over2 from "../../Images/overview2.png";
import over3 from "../../Images/overview3.png";
import over4 from "../../Images/overview4.png";
const Overview = () => {
  const exams = [
    { id: "01", title: "Math 011", status: "Schedule", candidates: 4 },
    { id: "02", title: "English 023", status: "Draft", candidates: 2 },
    { id: "03", title: "Science 024", status: "Schedule", candidates: 1 },
    { id: "04", title: "Chemistry 025", status: "Draft", candidates: 2 },
  ];

  const colors = ["#00b4ff", "#00ff94", "#a36cff", "#ffad47"]; // Colors for candidate badges

  return (
    <>
      <section className="overview">
        <div className="row">
          <div className="col-md-3 col-6 mb-3">
            <div className="totalStudent">
              <div>
                <img src={over1} alt="" />
              </div>
              <h2>10</h2>
              <h5>Total Students </h5>
              <a href="">+8% from last week</a>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="totalCenters">
              <div>
                <img src={over2} alt="" />
              </div>
              <h2>50</h2>
              <h5>Total Centers</h5>
              <a href="">+5% from last week</a>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="course">
              <div>
                <img src={over3} alt="" />
              </div>
              <h2>5</h2>
              <h5>Course</h5>
              <a href="">+1,2% from last week</a>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="counsellor">
              <div>
                <img src={over4} alt="" />
              </div>
              <h2>80</h2>
              <h5>Counsellor</h5>
              <a href="">0,5% from last week</a>
            </div>
          </div>
        </div>
      </section>
      <section className="tableOverview">
        <div
          className="p-3"
          style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
        >
          <h5 className="mb-4 text-danger">Exam Schedule</h5>
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Exam Title</th>
                <th>Status</th>
                <th>Candidates</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr key={index}>
                  <td>{exam.id}</td>
                  <td>{exam.title}</td>
                  <td>
                    <span
                      className="badge"
                      style={{
                        backgroundColor:
                          exam.status === "Schedule" ? "#28a745" : "#ffc107",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        color: "#fff",
                      }}
                    >
                      {exam.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className="badge"
                      style={{
                        backgroundColor:
                          colors[(exam.candidates - 1) % colors.length],
                        fontSize: "14px",
                        padding: "10px 15px",
                        color: "#fff",
                        borderRadius: "20px",
                      }}
                    >
                      {exam.candidates}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Overview;
