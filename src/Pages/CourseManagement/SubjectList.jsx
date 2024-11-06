import React, { useState } from "react";

const SubjectList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="allPageHeading">
          <h1>Subject List</h1>
        </div>
        <div className="searchSection">
          <button className="orangeBtn" onClick={handleShowModal}>
            <i className="bi bi-file-earmark-play"></i> Add New Subject
          </button>
          {showModal && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Add New Subject</h5>
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
                        <label htmlFor="date" className="form-label">
                          Subject Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Subject Code"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Subject Name" className="form-label">
                          Subject Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Subject Name"
                          placeholder="Enter Subject Name"
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
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>x</td>
                <td>xxx</td>
                <td>xxxx</td>
                <td>xxxxx</td>
                <td>xxxxxx</td>
                <td className="d-grid gap-1">
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

export default SubjectList;
