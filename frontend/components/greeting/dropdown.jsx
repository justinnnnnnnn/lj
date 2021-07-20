import React from 'react';
// import { Link } from 'react-router-dom';

const dropDownFunc = () => {
  return console.log("butt")
}

const DropDown = () => {
  return (
    <div className="account-dropdown">
      <button onClick={dropDownFunc} className="dropdown-button">banananana</button>
      <div>This is a banana</div>
    </div>
  );
};

export default DropDown;