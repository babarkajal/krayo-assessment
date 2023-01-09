import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

function UploadFile(props) {
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };
  return (
    <div className="upload-file">
      {file && (
        <div className="selected-file">
          {/* <img src={URL.createObjectURL(file)} alt={file.name} /> */}
          {file.name}
        </div>
      )}
      <div className="upload-file-input">
        <label htmlFor="upload-file" className="upload-file-input-label">
          Select File
        </label>
        <input type="file" id="upload-file" onChange={handleFileSelect} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userDetails: state.appData.userDetails };
};

export default connect(mapStateToProps)(UploadFile);
