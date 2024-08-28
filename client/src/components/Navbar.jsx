import { Container, Nav, Navbar, Stack  } from "react-bootstrap";
import { Link } from "react-router-dom"; 

const NavBar = () => {
    return( <Navbar bg="dark" className="mb-4" style={{height:"3rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none">
                ChatApp
                </Link>
            </h2>
            <span className="text-warning">Connecté en tant que : </span>
            <Nav>
                <Stack direction="horizontal" gap="3"> 
                    <Link to="/login" className="link-light text-decoration-none">
                        Connexion
                    </Link>
                    <Link to="/register" className="link-light text-decoration-none">
                        S'inscrire
                    </Link>
                </Stack>
            </Nav>
        </Container>
    </Navbar>
    );
};
 
export default NavBar;