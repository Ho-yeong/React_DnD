import React from 'react';

export const Board = ({ children, id, className }) => {
  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');

    const card = document.getElementById(cardId);
    card.style.display = 'block';

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={id} onDrop={drop} onDragOver={dragOver} className={className}>
      {children}
    </div>
  );
};
