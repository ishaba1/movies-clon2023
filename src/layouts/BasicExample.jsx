import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

function BasicExample() {
    return (
        <>
        <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"../features/home/views/home_views.jsx"} >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"../features/home/views/home_views.jsx"}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={"../componentes/navbar/pages/Series.jsx"}>Series</Nav.Link>
                        <Nav.Link as={Link} to={"../componentes/navbar/pages/Peliculas.jsx"}>Peliculas</Nav.Link>
                        <Nav.Link as={Link} to={"../componentes/navbar/pages/NovedadesPopulares.jsx"}>Novedades populares</Nav.Link>
                        <Nav.Link as={Link} to={"../componentes/navbar/pages/MiLista.jsx"}>Mi lista</Nav.Link>
                        <Nav.Link as={Link} to={"../componentes/navbar/pages/ExploraPorIdioma.jsx"}>Explora por idioma</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>

        </>
    );
}

export default BasicExample;