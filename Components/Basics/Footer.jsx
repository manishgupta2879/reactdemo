import React from 'react';

function Footer() {
  const footerStyle = {
    color: 'white',
    fontSize: '18px',
    textAlign: 'center',
  };

  return (
    <div className="p-3 mt-4 dashheadcolor" style={footerStyle}>
     &#169; Copyright By React Demo 2023
    </div>
  );
}

export default Footer;
