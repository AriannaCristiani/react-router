import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='navbar'>
            <ul className='nav-menu'>
                <li>
                    <NavLink to='/'>Home Page</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/main'>Posts</NavLink>
                </li>
            </ul>
        </nav>
    )
}