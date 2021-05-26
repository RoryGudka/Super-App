import {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider';
import {DarkModeContext} from 'DarkModeProvider';

const useStyles = makeStyles(theme => ({
    mark: {
      color: "red"
    }
  }));
const DarkSlider = ({...rest}) => {
    const classes = useStyles();
    const {darkMode} = useContext(DarkModeContext);

    return (
        darkMode ? (
            <Slider classes={{ markLabel: classes.mark }} {...rest} />
        ) : (
            <Select {...rest} />
        )
    )
}

export default DarkSlider;