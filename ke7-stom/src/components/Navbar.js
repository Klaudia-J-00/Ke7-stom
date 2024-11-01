import { Navbar, Nav, Container } from "react-bootstrap";
import "./style/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function NavbarBS() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, customCartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="App">
      <div className="App-Navbar m-3">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="navbar-brand">
              KE7 | STOM
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end px-5"
            >
              <Nav>
                <Nav.Link href="/about" className="nav-link px-3">
                  O nas
                </Nav.Link>
                <Nav.Link href="/keyboard" className="nav-link px-3">
                  Klawiatury
                </Nav.Link>
                <Nav.Link href="/personalization" className="nav-link px-3">
                  Personalizacja
                </Nav.Link>
                <Nav.Link href="/basket" className="nav-link px-3">
                  <FontAwesomeIcon icon={faCartShopping} size="lg" />
                  <span className="badge">
                    {cartItems.length + customCartItems.length}
                  </span>
                </Nav.Link>

                {userInfo ? (
                  <Nav.Link href="/profile" className="nav-link px-3 logged-in">
                    <FontAwesomeIcon icon={faCircleUser} size="lg" />
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/login" className="nav-link px-3 ">
                    <FontAwesomeIcon icon={faCircleUser} size="lg" />
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarBS;
