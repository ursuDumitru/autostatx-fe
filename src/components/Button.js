import React from 'react';

function Button({ onClick, text, backgroundColor, textColor, margin, width, fontSize, hoverBackgorundColor }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: backgroundColor || '#28a745', // Default green color if no color is passed
                color: textColor || '#fff', // White text color
                border: 'none', // Remove the border
                borderRadius: '8px', // Rounded corners
                margin: margin || '20px 0', // Add margin top and bottom
                padding: '10px 20px', // Add some padding
                fontWeight: 'bold', // Bold font weight
                fontSize: fontSize || '16px', // Font size
                cursor: 'pointer', // Pointer cursor on hover
                boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)', // Soft shadow
                transition: 'background-color 0.3s, box-shadow 0.3s', // Smooth transition for effects
                width: width || 'auto', // Full width
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = hoverBackgorundColor || '#919191')} // Darken color on hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = backgroundColor || '#28a745')} // Return to original color
        >
            {text}
        </button>
    );
}

export default Button;
