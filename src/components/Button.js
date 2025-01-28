import React from 'react';

function Button({ onClick, text, backgroundColor, textColor, margin }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: backgroundColor || '#28a745', // Default green color if no color is passed
                color: textColor || '#fff', // White text color
                border: 'none', // Remove the border
                borderRadius: '5px', // Rounded corners
                margin: margin || '20px 0', // Add margin top and bottom
                padding: '10px 20px', // Add some padding
                fontWeight: 'bold', // Bold font weight
                fontSize: '16px', // Font size
                cursor: 'pointer', // Pointer cursor on hover
                transition: 'background-color 0.3s', // Smooth transition for background color change
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = darkenColor(backgroundColor || '#28a745'))} // Darken color on hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = backgroundColor || '#28a745')} // Return to original color
        >
            {text}
        </button>
    );
}

// Helper function to darken the color
const darkenColor = (backgroundColor) => {
    // set colorCode to some gray
    let colorCode = '#919191';
    if (colorCode === '#28a745') {
        return '#218838'; // Dark green
    } else {
        // For other colors, you can implement a general darken logic
        return colorCode; // Default, no change
    }
};

export default Button;
