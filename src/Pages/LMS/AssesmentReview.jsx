import React, { useState } from "react";

const AssesmentReview = () => {
  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="allPageHeading">
          <h1>LMS: Assessment Review</h1>
        </div>
        <div className="searchSection">
          <input
            className="form-control w-50"
            type="search"
            placeholder="Search..."
            name=""
            id=""
          />
        </div>
      </div>

      <div className="container mt-4">
      <div className="overflo">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S No.</th>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Test Taken</th>
              <th>Result</th>
              <th>Result Shown</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>xxxxxx</td>
              <td>Harsh</td>
              <td>Mern Stack</td>
              <td>xxxxxxx</td>
              <td>
                <select
                  className="form-select"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="pending">Pending</option>
                  <option value="pass">Pass</option>
                  <option value="fail">Fail</option>
                </select>
              </td>
              <td>
              <select
                  className="form-select"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="shown">Shown</option>
                  <option value="not-shown">Not Shown</option>
                </select>
              </td>
              <td>
                manage result
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default AssesmentReview;
