import "./contact.css";
import {GrFacebook, GrInstagram} from "react-icons/gr";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    // <Container>
    <div className="d-flex justify-content-around conatiner-contact">
      <div className="about-contact-list ">
        <ul className="list-group list-group-flush ">
          <li className="list-group-item " style={{ backgroundColor: "#222" , color:"#c09148"}}>
            Str. Aradului, Nr.50
          </li>
          <li className="list-group-item" style={{ backgroundColor: "#222", color:"#c09148" }}>
            Telefon: 0256 281 043
          </li>
          <li className="list-group-item" style={{ backgroundColor: "#222" , color:"#c09148"}}>
            Program: L-S 10-19
          </li>
          <li className="list-group-item" style={{ backgroundColor: "#222", color:"#c09148" }}>
            Email: statiacuvin@gmail.com
          </li>
        </ul>
      </div>
      <div className="icons-contact d-flex align-items-center">
      
      </div>
      <div className="d-flex align-items-center ">
      <h3 style={{ color: "#c09148"}}>Statia cu vin</h3>
      <Link to="/">
        <div style={{backgroundColor:"#c09148", borderRadius:"50%", marginLeft:"1rem"}}>
            <img src="/Logo.png" style={{ weight: "4rem", height: "6rem" }} />
            </div>
          </Link>
      </div>
    </div>
    // </Container>
  );
};

export default Contact;
