import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Page } from '../components/Page';

const demoProps = {
  user: {},
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Including demo props here for example */}
      <Page {...demoProps} />

      <footer className={styles.footer}>
        <a href='https://discord.gg/FEcxMkdN3F' target='_blank' rel='noopener noreferrer'>
          Code Kaffe
        </a>
      </footer>
    </div>
  );
}
