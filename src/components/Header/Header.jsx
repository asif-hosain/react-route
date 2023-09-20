import { Link, NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav>
                <span> My website </span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;