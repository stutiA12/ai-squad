import '../styles/Navbar.css';
import logo from '../assets/logo.png';

 function Navbar() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" className='logo'/>

            </div>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">About Us</a>
                <a href="/#">Services</a>
                <a href="/#">Pricing</a>
            </nav>
            <div className="buttons">
                <button type="button">Sign In</button>
                <button type="button">Sign Up</button>
            </div>
        </header>
    );
}

export default Navbar;
