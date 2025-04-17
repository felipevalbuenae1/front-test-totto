import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard/seccion1">Sección 1</Link>
        </li>
        <li>
          <Link to="/dashboard/seccion2">Sección 2</Link>
        </li>
        <li>
          <Link to="/dashboard/seccion3">Sección 3</Link>
        </li>
        <li>
          <Link to="/dashboard/seccion4">Sección 4</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;