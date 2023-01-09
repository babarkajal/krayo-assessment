import React from "react";

function ListFiles(props) {
  return (
    <div className="file-list">
      <div className="heading">Uploaded files list</div>
      {[1, 2, 3, 4].map((val, index) => (
        <div className="file-list-card">{val}</div>
      ))}
    </div>
  );
}

export default ListFiles;
