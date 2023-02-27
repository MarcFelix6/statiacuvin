import { useRef, useState, useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Context } from "../../context/store";
import emailjs from "@emailjs/browser";


const Formular = ({ message, onEmailSuccess }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const { setShowToast } = useContext(Context);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLICK_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        
        setShowSpinner(false);
        setShowToast({
          show: true,
          title: "Multumim",
          message: "Comanda a fost trimisa cu succes",
          position: "top-end",
          bg: "success",
        });
        onEmailSuccess();
      },
      (error) => {
        setShowSpinner(false);
        setShowToast({
          show: true,
          title: "Eroare",
          message: "Comanda nu a fost efectuata, incercati inca o data mai tarziu.",
          position: "top-end",
          bg: "error",
        });
        console.log(error);
      }
    );
  };

 

  return (
    <>
      <Container>
        <form
          className="row g-3 justify-content-center m-5"
          ref={form}
          onSubmit={sendEmail}
          
        >
          <div className="col-md-3">
            <label htmlFor="inputName" className="form-label">
              Nume
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="nume"
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPrenume" className="form-label">
              Prenume
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPrenume"
              name="prenume"
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputTelefon" className="form-label">
              Telefon
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputTelefon"
              name="tel"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputOras" className="form-label">
              Oras
            </label>
            <input
              type="text"
              className="form-control"
              id="inputOras"
              name="oras"
              required
            />
          </div>
          <div style={{ display: "none" }}>
            <input
              type="text"
              readOnly
              value={message
                ?.map(
                  (prod) =>
                    `Nume: ${prod.nume} / Pret: ${prod.pret} / Qty: ${prod.qty}`
                )
                .join('\n')}
              name="message"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={showSpinner}
              
            >
              {showSpinner && <Spinner size="sm" className="me-1" />}
              Cere oferta!
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Formular;
