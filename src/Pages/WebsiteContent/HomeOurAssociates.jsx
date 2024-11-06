import React, { useState } from "react";
import './websiteContent.css'
const HomeOurAssociates = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const imagePreviews = images.map((image) => URL.createObjectURL(image));

    setUploadedImages((prevImages) => [...prevImages, ...imagePreviews]);

    setImages([]);
    e.target.reset();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="text-center">
          <h2 className="mb-4">Upload Associates Photos</h2>
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
            <button type="submit" className="btn btn-primary">
              Upload Images
            </button>
          </form>
        </div>

        {/* Gallery Display */}
        <div className="mt-5">
          <h3>Our Associates</h3>
          <div className="row">
            {uploadedImages.map((image, index) => (
              <div key={index} className="col-md-2 mb-4">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid rounded homegalleryImg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOurAssociates;
