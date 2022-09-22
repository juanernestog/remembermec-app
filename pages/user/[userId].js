import { useRouter } from 'next/router';
import { Card, Col, Row, Container } from 'react-bootstrap';

export default function users({ dataUser, dataMachine }) {
  // const router = useRouter();
  // const { userId } = router.query;
  // console.log(dataMachine);

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
                  <Card.Subtitle>Hello {dataUser.data.name}!</Card.Subtitle>
                  <Card.Subtitle> Tus maquinas</Card.Subtitle>
                  {dataMachine.data.map((machine) => {
                    return <p key={machine._id}> {machine.reference}</p>;
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
  const user = await fetch(`http://localhost:3000/api/users/${params.userId}`, {
    method: 'GET',
  });
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
