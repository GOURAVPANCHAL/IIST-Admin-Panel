import React from "react";

const ManageCenter = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="allPageHeading">
          <h1>Manage Centers</h1>
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
              <th>Center Code</th>
              <th>Name Of Center</th>
              <th>Specialised Skill of Centre</th>
              <th>Assigned Counsellor</th>
              <th>Login Id</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>00010</td>
              <td>INGOU</td>
              <td>BCA</td>
              <td>Nothing</td>
              <td>
                9879
              </td>
              <td>
               ******
              </td>
              <td>
              <button className="btn btn-success btn-sm mx-1"><i class="bi bi-pencil-fill"></i> Edit</button>
              </td>
            </tr>
           
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default ManageCenter;
