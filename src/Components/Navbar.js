import {Link} from 'react-router-dom';

const Navbar = props => {
    return (
        <div id="navbar">
            <div className="nav">
                <li><Link to="/">Home</Link></li>
                <div className="opaque"></div>
            </div>
            <div className="nav">
                <li><Link to="/Weather/">Weather Tracker</Link></li>
                <div className="opaque"></div>
            </div>
            <div className="nav">
                <li><Link to="/Restaurant/">Restaurant Finder</Link></li>
                <div className="opaque"></div>
            </div>
        </div>
    )
}

export default Navbar;