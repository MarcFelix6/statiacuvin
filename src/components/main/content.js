import "./content.css";
import Container from "react-bootstrap/Container";

const Content = () => {

  
  return (
    <Container >
      <header>
        <div className="description">
          <div className="text-box">
            <h3>Cine suntem noi?</h3>
            <p>
              Povestea <span>Stația cu Vin</span> a început în anul 2006 și de
              atunci încoace această companie încântă amatorii de vin bun cu
              cele mai gustoase băuturi alcoolice produse în România, fabricate
              de{" "}
              <span>
                Cramele Recaș, Petro Vaselo, Domeniile Averesti, Casa de Vinuri
                Cotnari
              </span>{" "}
              și mulți, mulți alții.
            </p>
          </div>
          <div className="image-box">
            <img src="/Statia.jpg" alt="Cover Photo" />
          </div>
        </div>
        <hr className="sections-separator" style={{backgroundColor: "#480000", height:"1px"}} />
      </header>

      <section className="about-bulk-wine">
        <div className="bulk-wine">
          <img src="/vie.jpg"></img>
        </div>

        <p>
          <span>Stația cu Vin</span> - un magazin specializat în băuturi
          alcoolice autohtone. Descoperă întreaga colecție de vinuri de la
          Stația cu Vin și fă acum o comandă cu produsele preferate!
        </p>
      </section>

      
      
      <div className="d-flex justify-content-center wine-title">
      <h2 >Vinuri</h2>
      </div>
    </Container>
  );
};

export default Content;
