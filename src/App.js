
import './App.css';

function App() {
  return (
    <div className="App">
 <h1>Hey, click on the button to open the modal.</h1>

 <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

    </div>
  );
}

export default App;
