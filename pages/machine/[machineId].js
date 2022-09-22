const axios = require('axios').default;
import { Formik } from 'formik';
import { Card, Row, Col } from 'react-bootstrap';

export default function Machineid({ dataUser, dataMachine }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    //aquí va el post
    axios
      .post('http://localhost:3000/api/machines', {
        reference: event.reference,
        lastName: 'Flintstone',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div
              className="w-100 p-5 m-5"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Card classname="w-40 m-5 p-3">
                <Card.Title>Users</Card.Title>
                <div classname="card-body">
                  <Card.Subtitle>Hello </Card.Subtitle>
                  <Card.Subtitle>
                    {' '}
                    Tu maquina {`${machine.reference}`}
                  </Card.Subtitle>
                  {dataMachine.data?.map((machine) => {
                    return <p key={machine._id}> {...machine}</p>;
                  })}
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  // primera carga de la pagina dentro de pagina
  const user = await fetch(
    `http://localhost:3000/api/machines/${params.machineId}`,
    {
      method: 'GET',
    },
  );
  const dataUser = await user.json();

  const machines = await fetch(`http://localhost:3000/api/machines`, {
    method: 'GET',
  });
  const dataMachine = await machines.json();

  return {
    props: {
      dataUser,
      dataMachine,
    },
  };
}
