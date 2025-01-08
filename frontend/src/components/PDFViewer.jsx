
import React from "react";

const PDFViewer = () => {
  return (
    <div>
      <iframe
        src={`${process.env.PUBLIC_URL}/Sathya_RS_CV2025.pdf`}
        width="100%"
        height="500px"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;
