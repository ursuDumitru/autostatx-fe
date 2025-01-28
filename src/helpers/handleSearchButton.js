import axios from 'axios';

const handleSearchButton = async (
    selectedService,
    selectedDate,
    startTime,
    endTime,
    setShowCardList,
    // setReports,
    setErrorMessage,
    setDataFromExcel
) => {
    // Validate the selected fields
    if (!selectedService || !selectedDate || !startTime || !endTime) {
        console.error('Please select all required fields.');
        setErrorMessage('Please select all required fields.');
        return;
    }

    setErrorMessage('');

    const formattedDate = selectedDate.toLocaleDateString('en-GB');
    const formattedStartTime = startTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    const formattedEndTime = endTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

    console.log('Selected Service:', selectedService);
    console.log('Selected Date:', formattedDate);
    console.log('Start Time:', formattedStartTime);
    console.log('End Time:', formattedEndTime);

    // Show loading or card list
    setShowCardList(true);

    // Fetch the reports
    try {
        const response = await axios.get('http://localhost:5000/api/analyzeVehicles', {
            params: {
                date: formattedDate,
                startTime: formattedStartTime,
                endTime: formattedEndTime,
                service: selectedService,
            },
        });

        setDataFromExcel(response.data);

        console.log('Reports:', response.data);
        // setReports(response.data);
    } catch (error) {
        console.error('Error fetching reports:', error);
        setErrorMessage('Failed to fetch reports. Please try again.');
    }
};

export default handleSearchButton;
