import React, { useContext, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

//import UserContext from '../containers/UserContext';

export default function NavUser() {
  const router = useRouter();

  // const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      const loggedUser = localStorage.getItem('user');
      if (loggedUser) {
        setUser(JSON.parse(loggedUser));
      }
    }

    if (user) {
      return (
        <Nav className="nav">
          <Link to={`/users/${user.id}`} className="nav-link">
            {user.name} <i className="fas fa-user-plus"></i>
          </Link>
          <Link to="/logout" className="nav-link">
            Cerrar Sesión
          </Link>
        </Nav>
      );
    } else {
      return (
        <Nav className="nav">
          <Link to="/signup" className="nav-link">
            Registrarme
          </Link>
          <Link to="/login" className="nav-link">
            Ingresar
          </Link>
        </Nav>
      );
    }
  });
}
