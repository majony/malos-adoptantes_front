import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import "bootstrap-icons/font/bootstrap-icons.css";
import perrito from "../img/perrito.png";

type Props = {};

const Consulta = (props: Props) => {
  return (
    <>
      <div className="container">
        {/* <!-- Outer Row --> */}

        <div className="col-xl-12 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}

              <Container
                style={{ paddingTop: "3%", paddingBlock: "3%" }}
                className="row justify-content-center"
              >
                <Row className="row align-items-center">
                  <Col xs={9}>
                    <div className="text-center">
                      <div className="h2 text-gray-900 mb-4">
                        Bienvenido a la plataforma Malos Adoptantes
                      </div>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <Image
                      src={perrito}
                      rounded
                      style={{ maxHeight: "200px" }}
                    />
                  </Col>
                </Row>

                <Row style={{ width: "98%", paddingTop: "2%" }}>
                  <Col xs={3}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        Nombre
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>

                  <Col xs={3}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        Paterno
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>

                  <Col xs={3}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        Materno
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>

                  <Col xs={3}>
                    <Button variant="primary">
                      <i className="bi bi-search"> Buscar</i>
                    </Button>
                  </Col>

                  <div style={{ paddingTop: "3%" }}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Apellido Paterno</th>
                          <th>Apellido Materno</th>
                          <th>Detalle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Manuel</td>
                          <td>Otto</td>
                          <td>Prat</td>
                          <td style={{ textAlign: "center" }}>
                            <Button variant="primary">
                              <i className="bi bi-eye"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Pedro</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td style={{ textAlign: "center" }}>
                            <Button variant="primary">
                              <i className="bi bi-eye"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jaime</td>
                          <td>Galaz</td>
                          <td>Pardo</td>
                          <td style={{ textAlign: "center" }}>
                            <Button variant="primary">
                              <i className="bi bi-eye"></i>
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulta;
