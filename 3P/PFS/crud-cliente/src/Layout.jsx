import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Meu Sistema</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/alunos" className="nav-link active">Alunos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/professores" className="nav-link active">Professores</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
            <Outlet />
        </>
    );
};

export default Layout;
