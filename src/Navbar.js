import { Link } from 'react-router-dom';

/**
 * A navbar component
 * @returns returns the navbar with links
 */
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>A list of films</h1>
            <div className="links">
                <Link to="/">Filmlist</Link>
                <Link to="/create">Add film</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;