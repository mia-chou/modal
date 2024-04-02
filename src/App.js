import './App.css';
import { useState } from 'react';
import Modal from "./Components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>

      <button className="openModalBtn" onClick={handleOpenModal}>Open</button>
      
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
