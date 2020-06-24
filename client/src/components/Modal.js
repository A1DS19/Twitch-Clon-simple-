import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = ({ title, description, actions }) => {
  const exitModal = () => {
    history.push('/');
  };
  const preventExit = (event) => {
    event.stopPropagation(); //Previene salirse del modal al tocar div del modal en si
  };

  return ReactDOM.createPortal(
    <div onClick={exitModal} className='ui dimmer modals visible active'>
      <div onClick={preventExit} className='ui standard modal visible active'>
        <div className='header'>{title}</div>
        <div className='content'>{description}</div>
        <div className='actions'>{actions()}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
