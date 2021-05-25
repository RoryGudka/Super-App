import IOSSwitch from '../Styles/IOSSwitch.js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useContext} from 'react';
import {DarkModeContext} from './DarkModeProvider.js';

const DarkModeSetter = props => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext);

    return (
        <div id="darkModeSetter">
            <FormControlLabel  style={{color:darkMode ? "white" : "black"}} label="Dark Mode" control={<IOSSwitch  checked={darkMode} onChange={e => setDarkMode(e.target.checked)} />} />
        </div>
    )
}

export default DarkModeSetter;