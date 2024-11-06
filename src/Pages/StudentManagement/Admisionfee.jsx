import React, { useState } from "react";

const Admisionfee = () => {
  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="allPageHeading">
          <h1>Admission Fee</h1>
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
                <th>Student Detail</th>
                <th>Course</th>
                <th>Form / Enrollment Status</th>
                <th>Course Fee</th>
                <th>Amount Received</th>
                <th>Payment Status</th>
                <th>Counsellor / Center Assigned</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12345</td>
                <td>
                  <ul>
                    <li>Name : Gourav</li>
                    <li>Email : gourav@gmail.com</li>
                    <li>Phone No. : xxxx-xxx-xxx</li>
                  </ul>
                </td>
                <td>M.TEC</td>
                <td>
                  <select
                    className="form-select"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td>1cr. /-</td>
                <td>50lakhs /-</td>
                <td>
                  <select
                    className="form-select"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Partially-received">
                      Partially Received
                    </option>
                    <option value="Completed">Completed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td>nothing</td>
                <td className="d-grid gap-1">
                  <button className="btn btn-dark btn-sm mx-1">
                    <i class="bi bi-plus-circle-dotted"></i> Add
                  </button>
                  <button className="btn btn-warning btn-sm mx-1">
                    <i class="bi bi-eye"></i> View
                  </button>
                  <button className="btn btn-success btn-sm mx-1">
                    <i class="bi bi-pencil-fill"></i> Edit
                  </button>
                  <button className="btn btn-danger btn-sm mx-1">
                    <i class="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admisionfee;
