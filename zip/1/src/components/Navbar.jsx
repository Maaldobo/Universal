import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" >PROBLEMA 1</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">To-do-List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contador">Contador</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/temperatura">Temperatura</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carrusel">Carrusel</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
