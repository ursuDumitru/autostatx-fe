import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DateTimeSelector({
    selectedDate,
    setSelectedDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
}) {
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setStartTime(null); // Reset start time when date changes
        setEndTime(null); // Reset end time when date changes
    };

    const handleStartTimeChange = (time) => {
        setStartTime(time);
        setEndTime(null); // Reset end time when start time changes
    };

    const handleEndTimeChange = (time) => setEndTime(time);

    const minEndTime = startTime
        ? new Date(startTime.getTime() + 60 * 60 * 1000) // Add 1 hour to start time
        : null;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <label htmlFor="date" style={{ fontWeight: 'bold', color: '#333' }}>
                Select Date:
            </label>
            <div style={{ width: '100%', padding: '5px' }}>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    placeholderText="Select a date"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
            </div>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', width: '100%' }}>
                {/* Start Time */}
                <div style={{ flex: 1, padding: '5px' }}>
                    <label htmlFor="start-time" style={{ fontWeight: 'bold', color: '#333' }}>
                        Start Time:
                    </label>
                    <div style={{ width: '100%' }}>
                        <DatePicker
                            selected={startTime}
                            onChange={handleStartTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={60}
                            timeCaption="Time"
                            dateFormat="HH:mm"
                            timeFormat="HH:mm"
                            placeholderText="Select start time"
                            className="form-control"
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                            disabled={!selectedDate} // Disable until a date is selected
                        />
                    </div>
                </div>

                {/* End Time */}
                <div style={{ flex: 1, padding: '5px' }}>
                    <label htmlFor="end-time" style={{ fontWeight: 'bold', color: '#333' }}>
                        End Time:
                    </label>
                    <div style={{ width: '100%' }}>
                        <DatePicker
                            selected={endTime}
                            onChange={handleEndTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={60}
                            timeCaption="Time"
                            dateFormat="HH:mm"
                            timeFormat="HH:mm"
                            placeholderText="Select end time"
                            minTime={minEndTime}
                            maxTime={new Date(0, 0, 0, 23, 59)}
                            disabled={!startTime} // Disable until a start time is selected
                            className="form-control"
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DateTimeSelector;
