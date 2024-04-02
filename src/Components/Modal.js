import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, onCancel, onContinue }) {
  const handleCancel = () => {
    setOpenModal(false);
    onCancel();
  };

  const handleContinue = () => {
    setOpenModal(false);
    onContinue();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>I hope you want to go there! The next page looks amazing.</p>
        </div>
        <div className="footer">
          <button onClick={handleCancel} id="cancellBtn">
            Cancel
          </button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
