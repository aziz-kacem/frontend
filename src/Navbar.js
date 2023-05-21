import { Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> HIBY SELL IMMO</h1>
            <div className="links">
                <Link to="/register"> Register </Link>
                <Link to="/add-prop"> New Property </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/login"> Login</Link>

                


            </div>

        </nav>

    );
}
 
export default Navbar;