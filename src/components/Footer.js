import React from 'react';
import {useState} from 'react';
const getCurrentYear = new Date().getFullYear();

const InfoFooter = () => {
  const [currentYear, setcurrentYear] = useState(()=> getCurrentYear)
  return (
  <footer>&copy; {currentYear} Mike Johnson
</footer>)
}

export default InfoFooter