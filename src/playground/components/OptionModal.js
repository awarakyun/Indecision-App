import React from 'react';
import Modal from 'react-modal';
 const OptionModal = (props) =>  (
   <Modal
     isOpen={!!props.selectedOption}
     contentLabel= "Selected Option"
     closeTimeoutMS={200}
      onRequestClose={props.handleSelectedOption}
      className="modal"
      >
        <h3 className="modal__title">selected Option</h3>
     <p className="modal__body">{props.suggestion}</p>
     <button onClick={props.handleSelectedOption} className="button">Okey</button>
   </Modal>
 );

 export default OptionModal ;
