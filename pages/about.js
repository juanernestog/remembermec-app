import { Card, Row, Col } from 'react-bootstrap';
export default function About() {
  return (
    <>
      <Row>
        <Col>
          <Card
            classname="justify-content-center m-3 p-3"
            style={{ width: '25rem' }}
          >
            <Card.Header>About</Card.Header>
            <Card.Body>
              {' '}
              RememberMec es una empresa que busca ayudarte a recordar y planear
              los mantenimientos de tus equipos para que nunca vuelvas a olvidar
              tu SOAT, revision tecnicomecanica o cambio de aceite de nuevo.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
