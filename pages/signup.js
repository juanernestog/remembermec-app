const axios = require('axios').default;
import { Formik } from 'formik';
import { Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function Machine() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //aquí va el post
    axios
      .post('http://localhost:3000/api/users/signin', {
        reference: event.reference,
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
      <div classname="center s-8">
        <Card>
          <Card.Title>Inicio sesion</Card.Title>
          <Formik
            initialValues={{
              email: '',
              password: '',
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
                <title>Iniciar sesion:</title>
                <label htmlFor="name">Nombre </label>
                <field
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label htmlFor="email">Correo </label>
                <field
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </>
  );
}
