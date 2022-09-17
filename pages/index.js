import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Router from 'next/router';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RememberMec</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Biembenido a <a href="/">RememberMec</a>
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
