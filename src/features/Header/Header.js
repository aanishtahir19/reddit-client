import './Header.scss';
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';
function Header() {
    return ( 
        <div id="header">
            <div className="header-container">
            
                <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="logo-highlight">Reddit</span>
                    <span>Minimal</span>
                    </Link>
                </div>
                
                
                
                <div className="search-container">
                    <input type="text" name="search" id="search" placeholder="Search" />
                    <button><i class="fas fa-search"></i></button>
                </div>
            </div>
        </div>
     );
}

export default Header;