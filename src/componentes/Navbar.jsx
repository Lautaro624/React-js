import React from "react"
import Cartwidget from "./Cartwidget"


const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Burguer Kong</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Menú</a>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Promociones!</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#"> 
                            <Cartwidget /> 
                        </a>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search" />
                        <button className="btn" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
                </nav>

        </div>
    )

    
}

export default Navbar