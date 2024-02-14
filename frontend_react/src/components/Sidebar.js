import React from 'react';

function Sidebar({ files }) {
  return (
    <div className="sidebar">
      <h3>Uploaded Files</h3>
      <ul>
        {files.map(file => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;