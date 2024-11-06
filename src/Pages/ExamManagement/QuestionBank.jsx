import React, { useState } from 'react'

const QuestionBank = () => {
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
          <h1> Ǫuestion Bank Management</h1>
        </div>
        <div className="searchSection">
          <button className="orangeBtn" onClick={handleShowModal}>
            <i className="bi bi-file-earmark-play"></i>  Add Ǫuestion Bank 
          </button>
          {showModal && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Add Ǫuestion Bank </h5>
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
                          Exam Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="examTitle"
                          placeholder="Enter exam title"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="course" className="form-label">
                          Course
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="course"
                          placeholder="Enter course"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                          Date
                        </label>
                        <input type="date" className="form-control" id="date" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="duration" className="form-label">
                          Total Questions
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="total-question"
                          placeholder="Enter Total Questions"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="maxMarks" className="form-label">
                        Upload Ǫuestions
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="upload-question"
                          placeholder="Upload CSV"
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
              <th>Total Question</th>
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
                <button className="btn btn-warning btn-sm mx-1">
                  <i class="bi bi-eye"></i> View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default QuestionBank