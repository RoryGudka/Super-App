import {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import ToggleButton from '@material-ui/lab/ToggleButton';
import {DarkModeContext} from './DarkModeProvider';

const useStyles = makeStyles({
    root: {
        '&.Mui-selected': {
            color:"white",
            backgroundColor:"rgb(255,255,255,0.1)"
        },
        borderColor:"white",
        color:"white"
    },
})

const useStyles2 = makeStyles({
    root: {
        '&.Mui-selected': {
            color:"black"
        },
        color:"black"
    }
})

const DarkToggleButton = ({...rest}) => {
    const classes=useStyles();
    const classes2=useStyles2();
    const {darkMode} = useContext(DarkModeContext);

    return (
        darkMode ? (
            <ToggleButton classes={classes}  {...rest} />
        ) : (
            <ToggleButton classes={classes2} {...rest} />
        )
    )
}

export default DarkToggleButton;