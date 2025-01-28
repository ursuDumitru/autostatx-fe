import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import CardListContainer from '../components/CardListContainer';
import CardContainer from '../components/CardContainer';
import ServiceSelector from '../components/ServiceSelector';
import DateTimeSelector from '../components/DateTimeSelector';
import Button from '../components/Button';
import theme from '../config/config';
import handleSearchButton from '../helpers/handleSearchButton';
import axios from 'axios';

function Dashboard() {
    const [showCardList, setShowCardList] = useState(false);
    // const [reports, setReports] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // State to manage selected date, start time, and end time
    const [selectedDate, setSelectedDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [selectedService, setSelectedService] = useState('');
    const [services, setServices] = useState([]);
    const [dataFromExcel, setDataFromExcel] = useState([]);
    // const [image, setImage] = useState(null);

    const handleClick = async () => {
        handleSearchButton(
            selectedService,
            selectedDate,
            startTime,
            endTime,
            setShowCardList,
            setErrorMessage,
            setDataFromExcel
        );

        // setImage();

        console.log('Services:', services);
    };

    const downloadFile = (downloadUrl) => {
        const link = document.createElement('a');
        link.href = downloadUrl;
        // link.download = downloadUrl.split('/').pop(); // Optional: Set the download filename from the URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <TopBar />
            <div
                className="d-flex flex-column align-items-center p-3"
                style={{ backgroundColor: '#F9FAFB', height: '100vh' }}
            >
                {/* Service and Time Selection */}
                <CardListContainer>
                    {/* ServiceSelector Card */}
                    <CardContainer width={300}>
                        <ServiceSelector label="Select a Service" selectedService={selectedService} setSelectedService={setSelectedService} setErrorMessage={setErrorMessage} setServices={setServices} services={services} />
                    </CardContainer>

                    {/* DateTimeSelector Card */}
                    <CardContainer width={400}>
                        <DateTimeSelector
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            startTime={startTime}
                            setStartTime={setStartTime}
                            endTime={endTime}
                            setEndTime={setEndTime}
                        />
                    </CardContainer>
                </CardListContainer>

                {/* Search Button */}
                <Button
                    color={theme.searchButtonColor}
                    text={'Search'}
                    onClick={handleClick}
                />

                {/* Error message */}
                {errorMessage && <CardListContainer>
                    <div className="alert alert-danger">{errorMessage}</div>
                </CardListContainer>}

                {/* Render CardListContainer only if showCardList is true */}
                {showCardList && (
                    <>
                        {/* Existing CardListContainer for services */}
                        <CardListContainer>
                            {services.directories.length > 0 && (
                                (() => {
                                    const selectedServiceData = services.directories.find(service => service.directory === selectedService);
                                    if (selectedServiceData && selectedServiceData.files.length > 0) {
                                        return selectedServiceData.files.map((file, index) => {
                                            return (
                                                <Button
                                                    key={index}
                                                    textColor={theme.generalColor}
                                                    backgroundColor={'#FFFFFF'}
                                                    text={file.name.split('.').slice(0, -1).join('.')} // Display name without extension
                                                    onClick={() => downloadFile(file.downloadUrl)} // Pass downloadUrl to the onClick handler
                                                />
                                            );
                                        });
                                    } else {
                                        return <p>No files available for the selected service.</p>;
                                    }
                                })()
                            )}
                        </CardListContainer>

                        {/* New CardListContainer for dataFromExcel */}
                        <div style={{ padding: '30px' }}>
                            <CardListContainer>
                                <CardContainer width={400}>
                                    <h5 style={{ padding: '10px' }}>Analysis Results</h5>
                                    <div className="mt-2">
                                        <p><strong>Unique Vehicles:</strong> {dataFromExcel.uniqueVehicles}</p>
                                        <p><strong>Average Time:</strong> {Math.round(dataFromExcel.averageTime)} minutes</p>
                                    </div>
                                    {/* <div className="mt-3">
                                        <img src={axios.get('http://localhost:5000/api/getChartImage')} alt="Graph" />
                                    </div> */}
                                </CardContainer>
                            </CardListContainer>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
