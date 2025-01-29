// import axios from 'axios';

const handleSearchButton = async (
    selectedService,
    selectedStartDate,
    selectedEndDate,
    startTime,
    endTime,
    setShowCardList,
    setErrorMessage,
    setExcelData
) => {
    // Validate the selected fields
    if (!selectedService || !selectedStartDate || !startTime || !endTime) {
        console.error('Please select all required fields.');
        setErrorMessage('Please select all required fields.');
        return;
    }

    setErrorMessage('');

    const formattedStartDate = selectedStartDate.toLocaleDateString('en-GB');
    const formattedEndDate = selectedEndDate.toLocaleDateString('en-GB');
    const formattedStartTime = startTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    const formattedEndTime = endTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

    console.log('Selected Service:', selectedService);
    console.log('Selected Start Date:', formattedStartDate);
    console.log('Selected End Date:', formattedEndDate);
    console.log('Start Time:', formattedStartTime);
    console.log('End Time:', formattedEndTime);

    // Show loading or card list
    setShowCardList(true);

    // Call the API to analyze the data
    setExcelData([
        ["Statistici Generale"], // Header row spanning two columns
        ["Numar Unic de masini Detectate", "100"],
        ["Numar de Masini Detectate de AutoStatX dar lipsa in CRM", "101"],
        ["Timp mediu Service", "103 min"]
    ]);
};

export default handleSearchButton;
