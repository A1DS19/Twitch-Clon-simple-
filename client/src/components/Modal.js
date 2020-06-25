import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, actions, onDissmis }) => {
  const preventExit = (event) => {
    event.stopPropagation(); //Previene salirse del modal al tocar div del modal en si
  };

  return ReactDOM.createPortal(
    <div onClick={onDissmis} className='ui dimmer modals visible active'>
      <div onClick={preventExit} className='ui standard modal visible active'>
        <div className='header'>{title}</div>
        <div className='content'>{content}</div>
        <div className='actions'>{actions()}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
