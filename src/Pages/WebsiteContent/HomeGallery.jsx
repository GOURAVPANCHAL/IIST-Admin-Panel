import React, { useState } from "react";
import './websiteContent.css'

const HomeGallery = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Handle image upload submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert each file into an object URL for preview
    const imagePreviews = images.map((image) => URL.createObjectURL(image));

    // Add image previews to the gallery
    setUploadedImages((prevImages) => [...prevImages, ...imagePreviews]);

    // Reset file input and images state
    setImages([]);
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="mb-4">Upload Gallery Photos</h2>
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
        <h3>Gallery</h3>
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
  );
};

export default HomeGallery;
