import {DarkModeContext} from './DarkModeProvider.js';
import {useContext} from 'react';

const Body = ({children}) => {
    const {darkMode} = useContext(DarkModeContext);
    
    return (
        <div id={darkMode ? "darkBody" : "lightBody"}>
            {children}
        </div>
    )
}

export default Body;