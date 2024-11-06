import React, { useState } from "react";

const ReadableContent = () => {
  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="allPageHeading">
            <h1>Manage Readable Content</h1>
          </div>
          <div className="searchSection">
            <button className="orangeBtn">
              <i class="bi bi-file-earmark-play"></i> Add Readable Content
            </button>
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
                <th>Title</th>
                <th>Upload Date</th>
                <th>File Size</th>
                <th>Upload By</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12345</td>
                <td>M.TEC</td>
                <td>M.TEC</td>
                <td>M.TEC</td>
                <td>
                  <select
                    className="form-select"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </td>
                <td className="d-grid gap-1">
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
      </div>
    </>
  );
};

export default ReadableContent;
