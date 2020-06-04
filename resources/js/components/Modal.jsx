import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Modal = ({ parentMethod, isModalOpen }) => {
  return (
    <CSSTransition in={isModalOpen} timeout={3000}>
      <div className="modal">
        <p className="cancel" onClick={parentMethod}>
          ×
        </p>
        <div className="modal__wrapper">
          <p>hogehoge</p>
        </div>
      </div>
    </CSSTransition>
  );
};
