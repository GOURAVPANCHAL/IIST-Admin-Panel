import React, { useState } from "react";

const ExamSchedule = () => {
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
          <h1>Exam Schedule</h1>
        </div>
        <div className="searchSection">
          <button className="orangeBtn" onClick={handleShowModal}>
            <i className="bi bi-file-earmark-play"></i> Add Exam Schedule
          </button>
          {showModal && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Exam Schedule</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleCloseModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="examID" className="form-label">
                          Exam ID
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="examid"
                          placeholder="Enter exam ID"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="ExamTitle" className="form-label">
                          Exam Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Exam Title"
                          placeholder="Enter Exam Title"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Course" className="form-label">
                          Course
                        </label>
                        <input type="text" placeholder="Enter Course" className="form-control" id="date" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                          Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
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
                          placeholder="Enter Your Duration"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="max-marks" className="form-label">
                          Max Marks
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="max-marks"
                          placeholder="Enter Max Marks"
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
              <th>Exam Title</th>
              <th>Course</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Max Marks</th>
              <th>Status</th>
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
              <td>xxxxxxx</td>
              <td>
                <select
                  className="form-select"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="schedule">Scheduled</option>
                  <option value="complete">Complete</option>
                  <option value="cancel">Cancel</option>
                </select>
              </td>
              <td className="d-grid gap-1">
                <button className="btn btn-warning btn-sm mx-1">
                  <i class="bi bi-eye"></i> View
                </button>
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

export default ExamSchedule;
