import React, { useState } from "react";
import "./websiteContent.css";

const AllPrograms = () => {
  const [images, setImages] = useState([]);
  const [uploadedPrograms, setUploadedPrograms] = useState([]);
  const [programName, setProgramName] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleProgramNameChange = (e) => {
    setProgramName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (images.length === 0 || programName.trim() === "") {
      setError("Please select images and enter a program name.");
      return;
    }

    setError("");

    const imagePreviews = images.map((image) => URL.createObjectURL(image));

    setUploadedPrograms((prevPrograms) => [
      ...prevPrograms,
      { name: programName, images: imagePreviews },
    ]);

    setImages([]);
    setProgramName("");
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="mb-4">Upload Program Image</h2>
        <hr className="mb-5" />
      </div>
      <div className="HomeBannerForm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Images</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Program Name</label>
            <input
              type="text"
              className="form-control"
              value={programName}
              onChange={handleProgramNameChange}
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}{" "}
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>

      <div className="mt-5">
        <h3>Uploaded Programs</h3>
        {uploadedPrograms.map((program, programIndex) => (
          <div key={programIndex} className="mt-4">
            <h5>{program.name}</h5>
            <div className="row">
              {program.images.map((image, index) => (
                <div key={index} className="col-md-2 mb-3">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="img-fluid rounded homegalleryImg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPrograms;
