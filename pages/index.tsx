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
        <title>Draw Prompt</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <link
          href='https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap'
          rel='stylesheet'
        />
      </Head>

      {/* Including demo props here for example */}
      <Page {...demoProps} />

      <footer className={styles.footer}>
        <a
          style={{ color: '#fff' }}
          href='https://discord.gg/FEcxMkdN3F'
          target='_blank'
          rel='noopener noreferrer'
        >
          Code Kaffe
        </a>
      </footer>
    </div>
  );
}
