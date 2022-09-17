import { Navbar } from 'react-bootstrap';
import Router from 'next/router';

const Navigation = () => {
  return (
    <>
      <Navbar>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/  ">
                    Remembermec
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    ¿Quienes somos?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    iniciar sesion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Registrarse
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Navbar>
    </>
  );
};

export default Navigation;
