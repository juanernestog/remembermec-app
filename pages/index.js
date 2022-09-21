import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Router from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);
  console.log(token, '1');

  return (
    <div className={styles.container}>
      <Head>
        <title>RememberMec</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {token && <p>prueba</p>} */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="/">RememberMec</a>
        </h1>

        <p className={styles.description}>
          Para comenzar Inicia sesion o Registrate
        </p>

        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <h2>Iniciar sesion &rarr;</h2>
          </a>

          <a href="/signup" className={styles.card}>
            <h2>Registrate &rarr;</h2>
            <p>
              No vuelvas a pasarte de cambio de aceite, tecnico mecanica o andar
              con un extintor vencido. ¡Registrate ya!
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
