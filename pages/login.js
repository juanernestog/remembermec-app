const axios = require('axios').default;
import { Formik } from 'formik';
import { Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { serialize } from 'cookie';

export default function Machine() {
  const router = useRouter();

  const handleSubmit = (values) => {
    //aquí va el post
    axios
      .post('http://localhost:3000/api/users/signin', {
        ...values,
      })
      .then(function (response) {
        localStorage.setItem('token', response.data.meta.token);
        // router.push('/');
      })
      .catch(function (error) {
        console.log(error);
        alert('Error: Tienes un problema con tu sesion');
      });
  };

  // como seria Leer el token con cookie
  // const serialized = serialize('authToken', token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== 'development',
  //   maxAge: process.env.TOKEN_EXPIRES,
  //   path: '/',
  // });

  // res.setHeader('Set- Cookie', serialize);
  // res.status(200).json({ message: 'Success' });

  return (
    <>
      <div className="justify-content-center">
        <Row className="justify-content-center">
          <Col md="6">
            <Card>
              <Card.Title>Inicio sesion</Card.Title>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    handleSubmit(values);
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
                    <label htmlFor="email">Correo </label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <br />
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
              <Card.Footer>
                <Link href="/signup">¿No tienes cuenta aun? Registrate</Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
