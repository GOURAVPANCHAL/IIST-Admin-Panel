import React from "react";
import { Link } from "react-router-dom";

const ContentManagement = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="allPageHeading">
          <h1>LMS: Content Management</h1>
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
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12345</td>
              <td>M.TEC</td>
              <td className="d-grid gap-1">
                <button className="btn btn-dark">
                  <Link to={"/LMS/content-management/manage-video-content"}>
                    <i class="bi bi-file-earmark-play"></i> Manage Video Content
                  </Link>
                </button>
                <button className="btn btn-warning">
                  <Link to={"/LMS/content-management/manage-readable-content"}>
                    <i class="bi bi-card-list"></i> Manage Readable Content
                  </Link>
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

export default ContentManagement;
