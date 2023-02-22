import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { Context } from "../../context/store";

const Navs = () => {
  const { cartItems } = useContext(Context);
  const loc = useLocation();

  return (
    <>
    <div className="navBar-mini d-flex justify-content-end align-items-center" style={{backgroundColor:"#222"}}>
      <ul className="d-flex  m-1 me-1" style={{listStyle: "none", color:"#c09148"}}> 
      <li className="me-2" >Telefon: 0256 281 043</li>
      <li className="me-2" >Email: statiacuvin@gmail.com</li>
      </ul>
      </div>
    <Navbar className="d-flex justify-content-around "  expand="md" sticky="top"  variant="light" style={{backgroundColor:"#c09148", height:"6rem"}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/Logo.png" style={{ weight: "4rem", height: "7rem" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="m-auto">
            <Link className={`nav-link custom-link ${loc.pathname === "/" ? "visited" : ""}`} to="/">
              Acasa
            </Link>
            <Link className={`nav-link custom-link ${loc.pathname === "/vinalb" ? "visited" : ""}`} to="/vinalb">
              Vin Alb
            </Link>
            <Link className={`nav-link custom-link ${loc.pathname === "/vinroze" ? "visited" : ""}`} to="/vinroze">
              Vin Roze
            </Link>
            <Link className={`nav-link custom-link ${loc.pathname === "/vinrosu" ? "visited" : ""}`} to="/vinrosu">
              Vin Rosu
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div
          className="shopping-cart-container"
          style={{
            position: "relative",
            width: "60px",
            display: "flex",
            padding: "7px 10px",
            justifyContent: "center",
            borderRadius: "3px",
           
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-4px",
              right: "-8px",
              border: "2px solid #480000",
              backgroundColor: "#480000",
              color: "#f5f5f5",
              fontWeight: 700,
              borderRadius: "50%",
              width: "27px",
              textAlign: "center",
            }}
          >
            {cartItems.length}
          </div>
          <Link to="/magazin">
            <CgShoppingCart
              size="2rem"
              color="black"
              style={{ cursor: "pointer" }}
            ></CgShoppingCart>
          </Link>
        </div>
      </Container>
    </Navbar>
    </>
  );
  

};

export default Navs;
