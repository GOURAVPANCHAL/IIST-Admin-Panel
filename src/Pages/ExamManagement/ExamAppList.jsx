import React, { useState } from 'react'

const ExamAppList = () => {
    const [status, setStatus] = useState("Pending");

    const handleStatusChange = (e) => {
      setStatus(e.target.value);
    };
  return (
    <>
     <div className="container-fluid">
        <div className="allPageHeading">
          <h1>Exam Application List</h1>
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
              <th>Exam Type</th>
              <th>Student Detail</th>
              <th>Course</th>
              <th>Exam Fee Received</th>
              <th>Exam Form Status</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
              <td>
                <select
                  className="form-select"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td>
                <select
                  className="form-select"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="pending">Pending</option>
                  <option value="complete">Complete</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td className="d-inline-flex">
                <button className="btn btn-success btn-sm mx-1">Edit</button>
                <button className="btn btn-danger btn-sm mx-1">Delete</button>
              </td>
            </tr>
            {/* Add more rows here as needed */}
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default ExamAppList