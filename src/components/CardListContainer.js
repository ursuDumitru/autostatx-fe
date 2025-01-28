import React from 'react';
import theme from '../config/config'; // Import the global theme

function CardListContainer({ children }) {
  return (
    <div
      style={{
        display: 'flex', // Keep items in a row
        gap: '30px', // Spacing between cards
        flexWrap: 'nowrap', // Prevent wrapping
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'center', // Align items to the start of the row
        padding: '30px',
        backgroundColor: theme.generalColor, // Apply theme color
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '12px',
        margin: '0 auto', // Center horizontally
        width: 'fit-content', // Let the container grow with its children
        // overflowX: 'auto', // Allow horizontal scrolling if the content exceeds width
      }}
    >
      {children}
    </div>
  );
}

export default CardListContainer;
