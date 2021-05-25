import Paper from '@material-ui/core/Paper';
import LocationSetter from './LocationSetter.js';

const Home = (props) => {
	return (
		<div>
			<LocationSetter />
			<Paper style={{overflow:"hidden", display:"inline-block", borderRadius:"10px", width:"40vw", height:"40vw", margin:"4vw"}} elevation={3}>	
				<img className="homeImg" src="RestaurantFinder.jpg"></img>
			</Paper>
			<Paper style={{overflow:"hidden", display:"inline-block", borderRadius:"10px", width:"40vw", height:"40vw", margin:"4vw"}} elevation={3}>
				<img className="homeImg" src="WeatherApp.jpg"></img>
			</Paper>	
		</div>
	)
};

export default Home;
