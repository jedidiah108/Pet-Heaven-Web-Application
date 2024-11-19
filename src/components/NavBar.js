
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
    <>
       
        <nav>
        <div className='topnav'>
                <Link to='/'>Home</Link>    
                <Link to='/about'>About</Link>
                <Link to='/funcat' >Cats</Link>
                <Link to='/fundog' >Dogs</Link>
                <Link to='/contact' >Contact</Link>
                <Link to='/register' >Register</Link>
                <Link to='/login' >Member Login</Link>
                <Link to='/adopt' >Adopt/Release</Link>
                <div class="search-container">
          <form action="CarsPage.html">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        </div>
        </nav>
    </>
    )
}

export default NavBar;