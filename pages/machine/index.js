const axios = require('axios').default;
import { Formik } from 'formik';
import { Card, Row, Col } from 'react-bootstrap';

export default function Machine({ dataUser, dataMachine }) {
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
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Title>Añade una nueva maquina</Card.Title>
              <Formik
                initialValues={{
                  reference: '',
                  brand: '',
                  model: '',
                  description: '',
                  numberPlate: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                  console.log(JSON.stringify(values, null, 2));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit} className="flex">
                    <title>Create new Machine</title>
                    <label htmlFor="createMachine">reference</label>
                    <field
                      type="text"
                      name="reference"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.reference}
                    />
                    <label htmlFor="brand">Marca</label>
                    <input
                      type="text"
                      name="brand"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.brand}
                    />
                    <label htmlFor="model"> Año del modelo </label>
                    <input
                      type="text"
                      name="model"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.model}
                    />
                    <label htmlFor="description">Descrpcion</label>
                    <input
                      type="text-area"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    <label htmlFor="numberPlate">Placa</label>
                    <input
                      type="text"
                      name="numberPlate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.numberPlate}
                    />
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </Card>
          </Col>
          <Col>
            <Card classname="w-40 m-5 p-3">
              <Card.Title>Users</Card.Title>
              <div classname="card-body">
                <Card.Subtitle> Tus maquinas</Card.Subtitle>
                {dataMachine.data.map((machine) => {
                  return <p key={machine._id}> {machine.reference}</p>;
                })}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <style></style>
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
