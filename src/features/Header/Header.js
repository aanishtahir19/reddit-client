import './Header.scss';
import logo from "../../logo.svg";
function Header() {
    return ( 
        <div id="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="logo-highlight">Reddit</span>
                    <span>Minimal</span>
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