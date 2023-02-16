import React from 'react';
import {useState} from 'react';
import reactLogo from '../images/logo192.png'
const getCurrentYear = new Date().getFullYear();

const InfoFooter = () => {
  const [currentYear, setcurrentYear] = useState(()=> getCurrentYear)
  return (
  <footer><div>&copy; {currentYear} Mike Johnson</div>
  <div className='logoCard'>Made with React <img src={reactLogo} alt="React Logo" /> </div>
</footer>)
}

export default InfoFooter