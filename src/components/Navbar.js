import { Link } from "react-router-dom";

const Navbar = () =>{


   return(
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
         <Link to="/" className="navbar-brand"> LAB - WikiCountries</Link>
        </div>
      </nav>
    )
}
   
export default Navbar;