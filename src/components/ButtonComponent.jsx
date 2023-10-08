import React from 'react'

const ButtonComponent = ({ textBtn, colorBtn,textColor,onClick  }) => {
  const buttonStyles = {
    backgroundColor: colorBtn,
    color: textColor,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    margin:'15px'
  };

  return (
    <button style={buttonStyles} onClick={onClick} >
      {textBtn}
    </button>
  );
};

export default ButtonComponent