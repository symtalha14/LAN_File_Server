
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header({ toggle, toggleFunc }) {

    return (
        <header>
            <h1>HomeCloud</h1>
            <ul className="nav-items" style={{ display: toggle ? "flex" : "none" }}>
                <Router>
                        <li className="nav-link" title="Upload Files">
                    <Link to='/'>
                            Upload Files
                    </Link>
                        </li>
                    <Link to="/my" >
                        <li className="nav-link" title="My Files">
                            My Files
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-link"  title="About">
                            About
                        </li>
                    </Link>
                </Router>
                
            </ul>
            <span id="menu-toggle" className={toggle?"fa fa-times":"fa fa-bars"} onClick={() => toggleFunc((toggle) => !toggle)}></span>
        </header>
    )
}
