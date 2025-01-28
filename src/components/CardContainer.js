import React from 'react';

function CardContainer({ children, width }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '20px',
        width: `${width}px`, // Use the width prop directly for the card's width
        flex: '0 0 auto', // Prevent shrinking or growing
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    //   className="mt-3"
    >
      {children}
    </div>
  );
}

export default CardContainer;