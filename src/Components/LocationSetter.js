import {useContext, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {LocationContext} from './LocationProvider.js';

const LocationSetter = props => {
    const {location, setLocation} = useContext(LocationContext);
    const [locationValue, setLocationValue] = useState(location);

    return (
        <div id="locationSetter">
            <div id="locationWrapper">
                <TextField label="Location" value={locationValue} onChange={e => setLocationValue(e.target.value)} />
            </div>
            <div id="locationBtnWrapper">
                <Button variant="contained" color="primary" onClick={() => {
                    setLocation(locationValue);
                }}>Set Location</Button>
            </div>
        </div>
    )
}

export default LocationSetter;