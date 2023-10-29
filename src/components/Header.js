import './Headerstyle.css';
import logo from './images/logo.png'
import menu from './images/menu.png'
import { slideToggle } from "../components/slideToggle/index"
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const dropdowncaret = useRef(null);


    return (
        <div className="header-bg">
            <div className='header-content-container'>
                <img src={logo} alt='logo' />
                <div className='dropdowncaret' onClick={ () => slideToggle(dropdowncaret.current)}>
                    <span>
                        <img src={menu} alt='menu' id='menu'/>
                    </span>
                </div>
            </div>
            <div ref={dropdowncaret} className="target-div thedropdown" style={{ display: "none"}}>
                <Link to="/" className='nav-link'> Home </Link>
                <Link to="/" className='nav-link'> Products </Link>
                <Link to="/" className='nav-link'> Contact Us </Link>
                <Link to="/" className='nav-link'> About </Link>
            </div>
        </div>
    );
}
 
export default Header;