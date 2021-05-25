import {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {DarkModeContext} from '../Components/DarkModeProvider';

const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline': {
            borderBottomColor: 'white',
        },
    },
    input: {
        color:"white",
        borderColor:"white"
    },
    label: {
        color:"lightgrey",
    }
});

const DarkTextField = ({...rest}) => {
    const {darkMode} = useContext(DarkModeContext);
    const classes = useStyles();
    return (
        darkMode ? (
            <TextField className={classes.root} inputProps={{className:classes.input}} InputLabelProps={{className:classes.label}} {...rest} />
        ) : (
            <TextField {...rest} />
        )
    )
}

export default DarkTextField;