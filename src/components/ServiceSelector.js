import React, { useEffect } from 'react';
import getServices from '../helpers/getServices'; // Adjust the path as needed

function ServiceSelector({ label, selectedService, setSelectedService, setErrorMessage, setServices, services }) {

    useEffect(() => {
        getServices(setServices, setErrorMessage);
    }, [setServices, setErrorMessage]);

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    return (
        <div>
            <label
                htmlFor="serviceSelect"
                className="form-label"
                style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#000',
                }}
            >
                {label}
            </label>
            <select
                id="serviceSelect"
                className="form-select"
                value={selectedService}
                onChange={handleServiceChange}
            >
                <option value="" disabled>Select a service</option>
                {services.directories && services.directories.length > 0 ? (
                    services.directories.map((service, index) => (
                        <option key={index} value={service.directory}>
                            {service.directory}
                        </option>
                    ))
                ) : (
                    <option>No services available</option>
                )}
            </select>
        </div>
    );
}

export default ServiceSelector;
