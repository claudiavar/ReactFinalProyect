import { useState } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import React, { Component } from "react";
import ImageGallaryComponent from "./CardSlide"

export const CarrouselCategori = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container className="my-5">
      <h4>
        PRODUCTOS DESTACADOS{" "}
        <FontAwesomeIcon icon={faStar} style={{ color: "#A98212" }} />
      </h4>
      <Slider {...settings} className="">
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div> 
        <div>
          <Card
            style={{ width: "auto", background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd"
          >
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp"
              className="mx-auto"  onClick={handleShow}
            />
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
                Laptop Gamer Lenovo 15.6" Intel Core i5 10°Gen 1TB HDD 8GB RAM
                GTX 1650
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. 3699.00</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                    S/. 4099.00
                  </span>
                </p>
                <Button btn>
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-search-plus fa-2x"
                      aria-hidden="true"                      
                      onClick={handleShow} style={{color:"black"}}
                    ></i>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered className="d-flex justify-content-center align-content-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Laptop Gamer Lenovo 15.6"</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>                        
                        <ImageGallaryComponent/>
                      </Modal.Body>
                      <Modal.Footer>                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      class="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>          
      </Slider>
    </Container>
  );
};
