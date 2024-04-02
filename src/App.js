//src/App.js
import './App.css';
import { useState } from 'react';
import Modal from "./Components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    console.log('Modal has been canceled');
    setIsModalOpen(false);
  };

  const handleContinue = () => {
    console.log('Continue with operation');
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={handleOpenModal}>Open</button>
      
      {isModalOpen && (
        <Modal 
          setOpenModal={setIsModalOpen} 
          onCancel={handleCancel} 
          onContinue={handleContinue} 
        />
      )}
    </div>
  );
}

export default App;
