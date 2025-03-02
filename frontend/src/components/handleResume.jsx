import * as React from 'react';
import Button from '@mui/material/Button';

export default function ResumeButton() {
  const handleOpenPDF = () => {
    // Opens the PDF in a new tab
    window.open(`${process.env.PUBLIC_URL}/Sathya_jCV2025.pdf`, '_blank');
  };

  return (
    <Button variant="contained" onClick={handleOpenPDF} color="#0000">
      See my Resume
    </Button>
  );
}
