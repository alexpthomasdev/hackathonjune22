import React from 'react';


import './styles.scss'
export const Reveal = ({
  id,
  size = 'normal',
  children,
  className,
  isOpen,
  handleOnClose,
  showCloseButton,
  handleCloseOnOverlayClick,
}) => {
  return (
    <div
      id={`${id}-overlay`}
      className={`reveal-overlay ${isOpen ? 'is-visible' : ''}`}
      onClick={(e) => {
        if (handleOnClose && handleCloseOnOverlayClick) {
          if (e?.target?.classList?.contains('reveal-overlay')) handleOnClose();
        }
      }}
    >
      <div
        className={`reveal ${size} ${className} ${isOpen ? 'is-visible' : ''}`}
        id={id}
        data-test={id}
      >
        {showCloseButton && (
          <button
            className="close-button-reveal"
            type="link"
            aria-label="Close"
            onClick={handleOnClose}
          >&times;</button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Reveal;
