// Importaciones de bibliotecas
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importaciones de estilos
import './App.css';
// Importaciones de imágenes
import LogoRedDinamica from './images/LogoRedDinamica1.png';
// Importaciones Componentes
import { ComponenteLogin, ComponenteProductos, ComponenteSolucionesMonitorizacion, ComponenteSolucionesInfraestructura, ComponenteSolucionesCloud, ComponenteSoporteProfesional, ComponenteSoporteTecnico, ComponenteInicio, ComponenteNosotrosFlammas } from './componentes';

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); 
});
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
        document.getElementById('loading-screen').remove();
        document.getElementById('content').style.display = 'block';
    }, 4000);
});

//Componente a renderizar
function App() {
    return (
        <div className="App">
            <div id="loading-screen">
                <img src={LogoRedDinamica} alt="Logo Red Dinámica" /> 
                <div className="spinner-border" role="status">
                    <span className="sr-only"> </span>
                </div>
            </div>
            <div id="content">
                <Router>
                    <Navbar expand="md" id="navbar">
                        <Navbar.Brand href="/inicio">
                            <img className="h-100" src={LogoRedDinamica} alt="Logo Red Dinámica" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="barra-nav">
                                <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                                <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/soluciones/monitorizacion" id="drop-item">Monitorización de Redes</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/infraestructura" id="drop-item">Infraestructura Integral</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/cloud" id="drop-item">Cloud y Virtualización</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/nosotros">¿Por qué Red Dinámica?</Nav.Link>
                                <NavDropdown title="Soporte" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/soporte/profesional" id="drop-item">Servicios Profesionales</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soporte/tecnico" id="drop-item">Soporte Técnico</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/login" id="contacto">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Routes>
                        <Route index path="/" element={<Navigate to="/inicio" />} />
                        <Route path="/inicio" element={<ComponenteInicio />} />
                        <Route path="/productos" element={<ComponenteProductos />} />
                        <Route path="/nosotros" element={<ComponenteNosotrosFlammas />} />
                        <Route path="/soluciones/monitorizacion" element={<ComponenteSolucionesMonitorizacion />} />
                        <Route path="/soluciones/infraestructura" element={<ComponenteSolucionesInfraestructura />} />
                        <Route path="/soluciones/cloud" element={<ComponenteSolucionesCloud />} />
                        <Route path="/soporte/profesional" element={<ComponenteSoporteProfesional />} />
                        <Route path="/soporte/tecnico" element={<ComponenteSoporteTecnico />} />
                        <Route path="/login" element={<ComponenteLogin />} />
                    </Routes>
                </Router>
                <footer className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-3 col-xl-3 info">
                            <img src={LogoRedDinamica} alt="Logo Red Dinámica" />
                            <p> Av. cra. 45 N° 108A-50 Sede Bosch piso 6, Bogota, Colombia </p>
                            <div>
                                <a href="https://www.linkedin.com/company/flammas/?viewAsMember=true" target='_blank' rel='noreferrer'>
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                {/* <a href="https://wa.me/51987654321" target='_blank' rel='noreferrer'>
                                    <i className="bi bi-whatsapp"></i>
                                </a> */}
                                <a href="mailto=ventas@flammas.com" target='_blank' rel='noreferrer'>
                                    <i className="bi bi-envelope"></i>
                                </a>    
                            </div>
                        </div>
                        <div className="col-12 col-sm-9 col-xl-9 links">
                            <div>
                                <h3> SOLUCIONES </h3>
                                <span> Monitorización de redes </span>
                                <span> Gestión de logs </span>
                                <span> Infraestructura integral </span>
                                <span> Experiencia de Usuario </span>
                                <span> Cloud y Virtualización </span>
                            </div>
                            <div>
                                <h3> MONITORIZACIÓN </h3>
                                <span> Monitorización de redes </span>
                                <span> Gestión de logs </span>
                                <span> Infraestructura integral </span>
                                <span> Experiencia de Usuario </span>
                                <span> Cloud y Virtualización </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
