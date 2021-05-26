import {useContext} from 'react';
import {makeStyles, withTheme} from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import {DarkModeContext} from './DarkModeProvider';

const useStyles = makeStyles({
    root: {
        '&.MuiInput-underline:before': {
            borderBottomColor:'white', // Semi-transparent underline
        },
        '&.MuiInput-underline:hover:before': {
            borderBottomColor:'white !important', // Solid underline on hover
        },
        '&.MuiInput-underline:after': {
            borderBottomColor: 'white', // Solid underline on focus
        },
        color:'white'
    },
    select: {

    },
    icon: {
        color:'white'
    }
})

const useStyles2 = makeStyles({
    root: {
        color:'white',
        borderColor:'white'
    },
    underline: {
        borderColor:'white'
    }
})

const DarkSelect =( {children, ...rest}) => {
    const {darkMode} = useContext(DarkModeContext);
    const classes = useStyles();
    const classes2 = useStyles2();
    return (
        darkMode ? (
            <Select classes={classes} {...rest}>{children}</Select>
        ) : (
            <Select {...rest}>{children}</Select>
        )
    )
}

export default DarkSelect;