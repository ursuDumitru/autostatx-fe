import React, { useEffect } from 'react';
import theme from '../config/config'; // Import the global theme
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
                    color: theme.generalColor,
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
            {/* {selectedService && (
        <div className="mt-3">
          <p>You selected: <strong>{selectedService}</strong></p>
        </div>
      )} */}
        </div>
    );
}

export default ServiceSelector;
