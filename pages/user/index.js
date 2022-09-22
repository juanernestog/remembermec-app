//import { useRouter } from 'next/router';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function user() {
  // const router = useRouter();
  // const { userId } = router.query;
  // console.log(dataMachine);
  const [dataUser, setDataUser] = useState({});
  const [dataMachine, setDataMachine] = useState({});

  useEffect(async function () {
    const parsedToken = localStorage.getItem('token');
    console.log(`Token: ${JSON.stringify(parsedToken)} --> ${parsedToken}`);
    // primera carga de la pagina dentro de pagina
    const user = await fetch(
      `http://localhost:3000/api/users/`,
      {
        method: 'GET',
      },
      { headers: { Authorization: `Bearer ${parsedToken}` } },
    );
    const dataUserR = await user.json();
    setDataUser(dataUserR);

    const machines = await fetch(
      `http://localhost:3000/api/machines`,
      {
        method: 'GET',
      },
      {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      },
    );
    const dataMachineR = await machines.json();
    setDataMachine(dataMachineR);
  }, []);

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
                  <Card.Subtitle>Hello {dataUser.data?.name}!</Card.Subtitle>
                  <Card.Subtitle> Tus maquinas</Card.Subtitle>
                  {dataMachine.data?.map((machine) => {
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

// export async function getServerSideProps({ params }) {
//   const parsedToken = JSON.parse(localStorage.getItem('form'));
//   // primera carga de la pagina dentro de pagina
//   const user = await fetch(
//     `http://localhost:3000/api/users/`,
//     {
//       method: 'GET',
//     },
//     { headers: { Authorization: `Bearer ${parsedToken}` } },
//   );
//   const dataUser = await user.json();

//   const machines = await fetch(
//     `http://localhost:3000/api/machines`,
//     {
//       method: 'GET',
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${parsedToken}`,
//       },
//     },
//   );
//   const dataMachine = await machines.json();

//   return {
//     props: {
//       dataUser,
//       dataMachine,
//     },
//   };
// }
