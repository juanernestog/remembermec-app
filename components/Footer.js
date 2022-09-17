import { Row, Col, Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
      <Card.Footer
        color="blue"
        className="font-small pt-4 mt-4 position-relative fixed-bottom bg-light"
      >
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <h5 className="title">Remembermec</h5>
              <p className="align-middle">
                Nuestra mision como empresa es dar a nuestros usuarios la
                tranquilidad de equipos con mantenimiento profesional a un click
                de distancia.
              </p>
            </Col>
            <Col md="6">
              <h5 className="title">Links de interes</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="/about"> ¿Quienes somos? </a>
                </li>
                <li className="list-unstyled">
                  <a href="/contact"> Contactanos </a>
                </li>
                <li className="list-unstyled">
                  <p> Linea de atencion:</p>
                  <a href="tel:+571234567892"> 1234567892 </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href="/"> www.remembermec.com </a>
          </Container>
        </div>
      </Card.Footer>
    </footer>
  );
}
