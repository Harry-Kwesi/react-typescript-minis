import { SetStateAction, useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#191932',
    borderRadius: '10px',
    textAlign:'center'
  },
};

Modal.setAppElement('#root');

function App() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickNumber = (number: SetStateAction<number | null>) => {
    setSelectedNumber(number);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleRecommendation = () => {
    if (selectedNumber !== null) {
      console.log(`You selected: ${selectedNumber}`);
      localStorage.setItem("recommendations", JSON.stringify(selectedNumber));
    }
    setModalIsOpen(false);
    toast(`Your recommendation of ${selectedNumber} has been submitted!`);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Click here to Recommend</button>
      <ToastContainer/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Selected Number Modal"
        style={customStyles}
        overlayClassName="Overlay"
      >
  
        <div className="card">
          <p>How likely are you going to recommend this to someone. </p>
          <div className="numbcardholder">
            {Array.from({ length: 10 }, (_, index: number) => (
              <div
                className="numbcards"
                key={index}
                onClick={() => handleClickNumber(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="btns">
            <button className="modalbtn" onClick={handleCloseModal}>Cancel</button>
            <button className="modalbtn" onClick={handleRecommendation}>Submit</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
