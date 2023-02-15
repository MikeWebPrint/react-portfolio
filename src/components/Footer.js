import React from 'react';
const currentYear = new Date().getFullYear()

const Footer = () => {
  return (<footer>
&copy; <span id='currentYear'></span> Mike Johnson
<script>
  document.getElementById('currentYear').textContent = currentYear
</script>
</footer>)
}

export default Footer