import  React from 'react';
let pathname = window.location.pathname

const Header = () => {
   return ( 
     <header>
      <h1>Mike Johnson</h1>
      <nav>
        <ul>
          <li><a 
          href="/"
          className={pathname === '/' ? 'current' : ''}
          >About</a></li>
          <li><a 
          href="/Portfolio"
          className={pathname === '/Portfolio' ? 'current' : ''}
          >Portfolio</a></li>
          <li><a 
          href="/Contact"
          className={pathname === '/Contact' ? 'current' : ''}
          >Contact</a></li>
        </ul>
      </nav>
       </header>

  )
}
export default Header
