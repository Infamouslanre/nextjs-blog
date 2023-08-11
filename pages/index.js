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
      <section className={utilStyles.headingMd}>
        <p>The name is Lanre, currently learning Next.js and React and I'm trying to build a portfolio thats connects all my feeds</p>
      </section>

      <section className='pt-3'>
        <nav className="flex sm:justify-center space-x-4">
          {[
            ['Blog', '/{id}'],
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