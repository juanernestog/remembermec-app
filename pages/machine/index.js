const axios = require('axios').default;
import { Formik } from 'formik';
import { Card, Row, Col } from 'react-bootstrap';

export default function Machine() {
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
                <label htmlFor="">Marca</label>
                <input
                  type="text"
                  name="brand"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.brand}
                />
                <label htmlFor="name"> Año del modelo </label>
                <input
                  type="text"
                  name="model"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.model}
                />
                <label htmlFor="name">Descrpcion</label>
                <input
                  type="text-area"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                <label htmlFor="name">Placa</label>
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
      </div>
      <style></style>
    </>
  );
}
