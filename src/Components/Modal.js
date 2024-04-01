import React from 'react'

export const Modal = () => {
  return (
  <div className="modalBackground">
  <div className="modalContainer">
   <button>X</button>

   <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer"></div>



  </div>
  </div>    
);


}

export default Modal;