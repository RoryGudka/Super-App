import "./Styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Weather from './Weather/App.js';
import Restaurant from './Restaurant/App.js';
import LocationProvider from './Components/LocationProvider.js';
import DarkModeProvider from './Components/DarkModeProvider';
import Body from './Components/Body.js';

function App() {
	return (
		<Router>
			<DarkModeProvider>
				<Body>
					<LocationProvider>
						<Navbar />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/Weather/" component={Weather} />
							<Route path="/Restaurant/" component={Restaurant} />
						</Switch>
					</LocationProvider>
				</Body>
			</DarkModeProvider>
		</Router>
	);
}

export default App;
