import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import CardListContainer from '../components/CardListContainer';
import CardContainer from '../components/CardContainer';
import ServiceSelector from '../components/ServiceSelector';
import DateTimeSelector from '../components/DateTimeSelector';
import Button from '../components/Button';
import ExcelDataTable from '../components/ExcelDataTable';
import theme from '../config/config';
import handleSearchButton from '../helpers/handleSearchButton';

function Dashboard() {
    const [showCardList, setShowCardList] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // State to manage selected date, start time, and end time
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [selectedService, setSelectedService] = useState('');
    const [services, setServices] = useState([]);
    const [excelData, setExcelData] = useState([]);

    const handleClick = async () => {
        handleSearchButton(
            selectedService,
            selectedStartDate,
            selectedEndDate,
            startTime,
            endTime,
            setShowCardList,
            setErrorMessage,
            setExcelData
        );

        console.log('Services:', services);
    };

    const downloadFile = (downloadUrl) => {
        const link = document.createElement('a');
        link.href = downloadUrl;
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
                <div>
                    <CardListContainer>
                        {/* ServiceSelector Card */}
                        <CardContainer width={200}>
                            <ServiceSelector label="Selecteaza Service-ul" selectedService={selectedService} setSelectedService={setSelectedService} setErrorMessage={setErrorMessage} setServices={setServices} services={services} />
                        </CardContainer>

                        {/* DateTimeSelector Card */}
                        <CardContainer width={800}>
                            <DateTimeSelector
                                selectedStartDate={selectedStartDate}
                                setSelectedStartDate={setSelectedStartDate}
                                selectedEndDate={selectedEndDate}
                                setSelectedEndDate={setSelectedEndDate}
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
                        hoverBackgorundColor={theme.hoverSearchButtonColor}
                        text={'Genereaza Raport'}
                        onClick={handleClick}
                        width={'100%'}
                        fontSize={'20px'}
                    />
                </div>

                {/* Error message */}
                {errorMessage && <CardListContainer>
                    <div className="alert alert-danger">{errorMessage}</div>
                </CardListContainer>}

                {/* Render CardListContainer only if showCardList is true */}
                {showCardList && (
                    <>
                        {/* Existing CardListContainer for services */}
                        <CardListContainer backgroundColor={'rgb(249, 250, 251)'} boxShadow={'none'} padding={'0'}>
                            {services.directories.length > 0 && (
                                (() => {
                                    const selectedServiceData = services.directories.find(service => service.directory === selectedService);
                                    if (selectedServiceData && selectedServiceData.files.length > 0) {
                                        return selectedServiceData.files.map((file, index) => {
                                            return (
                                                <Button
                                                    key={index}
                                                    textColor={theme.white}
                                                    backgroundColor={theme.generalColor2}
                                                    hoverBackgorundColor={theme.generalColor3}
                                                    text={file.name.split('.').slice(0, -1).join('.')} // Display name without extension
                                                    onClick={() => downloadFile(file.downloadUrl)} // Pass downloadUrl to the onClick handler
                                                    margin={'0'}
                                                />
                                            );
                                        });
                                    } else {
                                        return <p>No files available for the selected service.</p>;
                                    }
                                })()
                            )}
                        </CardListContainer>

                        <CardListContainer >
                            {/* A Table with data from the api */}
                            <ExcelDataTable excelData={excelData}/>
                        </CardListContainer>
                    </>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
