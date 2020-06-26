import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <h3>
        Desarrolado por: Jose Enrique Padilla{' '}
        <span style={{ color: 'red' }}>{new Date().getFullYear()}</span>
      </h3>
    </footer>
  );
}

export default Footer;
