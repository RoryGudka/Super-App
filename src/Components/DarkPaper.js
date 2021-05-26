import {makeStyles} from '@material-ui/core/styles';
import {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import {DarkModeContext} from '../Components/DarkModeProvider';

const useStyles = makeStyles({
    root: {
        backgroundColor:"#303136",
    }
})

const DarkModePaper = ({children, ...rest}) => {
    const {darkMode} = useContext(DarkModeContext);
    const classes = useStyles();
    return (
        darkMode ? (
            <Paper {...rest} className={classes.root}>
                <div className="darkPaper">
                    {children}
                </div>
            </Paper>
        ) : (
            <Paper {...rest}>
                {children}
            </Paper>
        )
    )
}

export default DarkModePaper;