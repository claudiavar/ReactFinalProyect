import ImageGallaryComponent from "./CardSlide";

class ModalProduct extends React.Component {
  render() {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="d-flex justify-content-center align-content-center"
      >
        <Modal.Header closeButton>
          <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImageGallaryComponent />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
}
export default ModalProduct;
