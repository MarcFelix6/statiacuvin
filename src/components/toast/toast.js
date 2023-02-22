import { Toast, ToastContainer } from "react-bootstrap";
import { Context } from "../../context/store";
import { useContext, useEffect } from "react";

const ToastMessage = ({ position, title, message, show }) => {
  const { setShowToast } = useContext(Context);

  useEffect(() => {
    if (show) {
      const id = setTimeout(() => {
        setShowToast({
          show: false,
          title: "Test message",
          message: "Message delivered with success",
          position: "top-end",
          bg: "success",
        });
        clearTimeout(id);
      }, 5000);
    }
  }, [show]);

  const handleClose = () => {
    setShowToast({
      show: false,
      title: "Test message",
      message: "Message delivered with success",
      position: "top-end",
      bg: "success",
    });
  }

  return (
    <ToastContainer position={position} className="p-3">
      <Toast show={show} bg="success" onClose={handleClose}>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastMessage;
