import {  Container } from "react-bootstrap";
import "./card.css";



const Card = (props) => {

  return (
    <Container>
      <div className="card-container">
        <div className="card-profile">
          <div className="w-75">
            <h4>{props.title}</h4>
            <h5>
            {props.description}
            </h5>
            <p >
              <span className="me-1">Mancaruri recomandate:</span>
            {props.recomendedFood}
            </p>
            <div className="d-flex gap-2">
              <span>{"Tip: " + props.tipe}</span>
              <span>{"Pret: " + props.price}</span>
              <span>{"Cantitate: " + props.quantity}</span>
              <span>{"Alcool: " + props.alcoolVolum}</span>
            </div>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src={props.image} />
            <button onClick={props.handleOnClick}>Adauga in cos</button>
          </div>
        </div>
      </div>
    </Container>

    
  );
};

export default Card;
