import React, { useState } from "react";

const CourseManagement = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <div className="container-fluid">
        <div className="allPageHeading">
          <h1>Course Management</h1>
        </div>
        <div className="searchSection">
          <button onClick={handleShowModal} className="orangeBtn" >
            <i class="bi bi-plus-circle-dotted"></i> Add New Course
          </button>
          {showModal && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Add New Course</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleCloseModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="examTitle" className="form-label">
                          Course Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="course code"
                          placeholder="Enter Course Code"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="course" className="form-label">
                          Course Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Course Name"
                          placeholder="Enter Course Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="duration" className="form-label">
                         Duration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="duration"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="fee" className="form-label">
                          Fee
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fee"
                          placeholder="Enter fee"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Bulk Upload" className="form-label">
                          Bulk Upload
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="Bulk Upload"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
              <th>Duration</th>
              <th>Course Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>00010</td>
              <td>Mern Stack</td>
              <td>1 year</td>
              <td>25000-/</td>
              <td>
                <button className="btn btn-success btn-sm mx-1">
                  <i class="bi bi-pencil-fill"></i> Edit
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

export default CourseManagement;
