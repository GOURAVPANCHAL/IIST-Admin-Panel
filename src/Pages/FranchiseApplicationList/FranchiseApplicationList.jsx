import React, { useState } from "react";

const FranchiseApplicationList = () => {
  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="allPageHeading">
          <h1>Franchisee Application List</h1>
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
              <th>Name of Applicant</th>
              <th>Centre Location</th>
              <th>Specialised Course of Centre</th>
              <th>Date - Time of Application</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Location A</td>
              <td>Course X</td>
              <td>2024-10-24 10:30 AM</td>
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
              <td className="d-inline-flex">
                <button className="btn btn-warning btn-sm mx-1">View</button>
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
  );
};

export default FranchiseApplicationList;
