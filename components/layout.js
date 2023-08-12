import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Lanre';
export const siteTitle = "Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className='pt-52'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Portfolio"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className='rounded-full'
              height='144'
              width='144'
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className='rounded-full'
                height='108'
                width='108'
                alt=""
              />
            </Link>
            <h2 className='text-7xl'>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="m-3" >
          <Link className='text-blue-600 visited:text-purple-600' href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}