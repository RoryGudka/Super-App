import {createContext, useState} from 'react';

const LocationContext = createContext();

const LocationProvider = ({children}) => {
    const [location, setLocation] = useState("");

    return (
        <LocationContext.Provider value={{location, setLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider;
export {LocationContext};