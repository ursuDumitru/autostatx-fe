import React from 'react';
import theme from '../config/config'; // Import the global theme

function CardListContainer({ children, backgroundColor, boxShadow, padding }) {
  return (
    <div
      style={{
        display: 'flex', // Keep items in a row
        gap: '30px', // Spacing between cards
        flexWrap: 'nowrap', // Prevent wrapping
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'center', // Align items to the start of the row
        padding: padding || '30px',
        backgroundColor: backgroundColor || theme.generalColor, // Apply theme color
        boxShadow: boxShadow || '0 6px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '12px',
        // margin: '0 auto', // Center horizontally
        // margin at the top then center horizontally
        margin: '20px auto 0',
        width: 'fit-content', // Let the container grow with its children
        // overflowX: 'auto', // Allow horizontal scrolling if the content exceeds width
      }}
    >
      {children}
    </div>
  );
}

export default CardListContainer;
