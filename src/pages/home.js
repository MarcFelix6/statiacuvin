import Content from "../components/main/content";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Content />
      <Container>
        <div className="d-flex p-5 justify-content-between home-cards-container">
          <Card>
            <Card.Img
              className="img-wine"
              variant="top"
              src="categ vin rosu.jpg"
            />
            <Card.Body>
              <Card.Title style={{color: "#480000", fontSize: "2rem"}}>Vin Rosu</Card.Title>
              <Card.Text>
              Uita-te peste lista vinurilor rosii, si alege-ti favoritul!
              </Card.Text>
              <button onClick={() => navigate("/vinrosu")}>Alege vinul tau!</button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              className="img-wine"
              variant="top"
              src="/categorie vin alb.jpg"
            />
            <Card.Body>
              <Card.Title style={{color: "#480000", fontSize: "2rem"}}>Vin Alb</Card.Title>
              <Card.Text>
              Uita-te peste lista vinurilor albe, si alege-ti favoritul!
              </Card.Text>
              <button onClick={() => navigate("/vinalb")}>Alege vinul tau!</button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              className="img-wine"
              variant="top"
              src="categ vin roze.jpg"
            />
            <Card.Body>
              <Card.Title style={{color: "#480000", fontSize: "2rem"}}>Vin Roze</Card.Title>
              <Card.Text>
              Uita-te peste lista vinurilor roze, si alege-ti favoritul!
              </Card.Text>
              <button  onClick={() => navigate("/vinroze")}>Alege vinul tau!</button>
            </Card.Body>
          </Card>
        </div>

        <hr className="sections-separator" style={{backgroundColor: "#480000", height:"2px"}} />
      </Container>

      
    </>
  );
};

export default Home;
