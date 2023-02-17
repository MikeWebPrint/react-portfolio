import  React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// let pathname = window.location.pathname

const Header = () => {
  const location = useLocation();
   return ( 
     <header>
      <h1>Mike Johnson</h1>
      <nav>
        <ul>
          <li><Link 
          to="/react-portfolio/"
          className={location.pathname === '/react-portfolio/' ? 'current' : ''}
          >About</Link></li>
          <li><Link 
          to="/react-portfolio/Portfolio"
          className={location.pathname === '/react-portfolio/Portfolio' ? 'current' : ''}
          >Portfolio</Link></li>
          <li><Link 
          to="/react-portfolio/Contact"
          className={location.pathname === '/react-portfolio/Contact' ? 'current' : ''}
          >Contact</Link></li>
        </ul>
      </nav>
       </header>

  )
}
export default Header
