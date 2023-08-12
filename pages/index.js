import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex sm:justify-center space-x-4 text-2xl">
        <p>I'm Lanre and I'm currently learning Javascript, I'm building a portfolio thats will track my progress and showchase different concepts I learn along the way.</p>
      </section>

      <section className='pt-3'>
        <nav className="flex sm:justify-center space-x-4 text-4xl">
          {[
            ['Blog', '/blog'],
            ['Projects', '/projects'],
            ['Social Feed', '/Socails'],
          ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
          ))}
        </nav>

      </section>
    </Layout>
  );
}