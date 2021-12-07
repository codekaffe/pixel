import Head from 'next/head';
import React from 'react';

import styles from './Page.module.css';

interface PageProps {
  title?: string;
}

export const Page: React.FC<PageProps> = ({ children, title = 'Draw Prompt' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <link
          href='https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap'
          rel='stylesheet'
        />
      </Head>
      <style jsx>{`
        section {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          flex-flow: column wrap;
        }
      `}</style>
      <div className={styles.container}>
        <section>{children}</section>
      </div>
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
    </>
  );
};
