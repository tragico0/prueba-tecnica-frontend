import { NavLink } from "react-router-dom";

export default function () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Rinku</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink  to="/employees/create" className="nav-link">Crear Empleado</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/employees/create-movement" className="nav-link">Capturar Movimiento</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/payroll/monthly" className="nav-link">Movimientos Por Mes</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
