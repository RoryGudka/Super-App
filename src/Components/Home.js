import LocationSetter from './LocationSetter';
import DarkModeSetter from './DarkModeSetter';
import DarkModePaper from './DarkPaper';

const Home = (props) => {
	return (
		<div>
			<div id="setters">	
				<LocationSetter />
				<DarkModeSetter />
			</div>
			<br></br>
				<DarkModePaper style={{overflow:"hidden", display:"inline-block", borderRadius:"10px", width:"40vw", height:"40vw", margin:"4vw"}} elevation={3}>	
					<img className="homeImg" src="RestaurantFinder.jpg"></img>
				</DarkModePaper>
				<DarkModePaper style={{overflow:"hidden", display:"inline-block", borderRadius:"10px", width:"40vw", height:"40vw", margin:"4vw"}} elevation={3}>
					<img className="homeImg" src="WeatherApp.jpg"></img>
				</DarkModePaper>
		</div>
	)
};

export default Home;
