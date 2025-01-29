import React from 'react';

function ExcelDataTable({ excelData }) {
    if (!excelData || excelData.length === 0) {
        return <p>No data available.</p>;
    }

    // Extract header rows and data rows
    const headerRows = excelData.filter((row, index) => index === 0 || row[0] === "");  // Header row(s)
    const dataRows = excelData.filter((row, index) => index !== 0 && row[0] !== "");

    return (
        <div style={{ overflowX: 'auto', width: '100%' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse'}}>
                <thead style={{ textAlign: 'center' }}>
                    {headerRows.map((headerRow, rowIndex) => (
                        <tr key={rowIndex}>
                            {headerRow.map((cell, colIndex) => (
                                <th key={colIndex} colSpan={colIndex === 0 && rowIndex === 0 ? 2 : 1}
                                    style={{
                                        border: '1px solid black',
                                        padding: '8px',
                                        backgroundColor: 'white',
                                        color: 'black'
                                    }}>
                                    {cell}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {dataRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} style={{
                                    border: '1px solid black',
                                    padding: '8px',
                                    backgroundColor: 'white',
                                    color: 'black'
                                }}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExcelDataTable;
