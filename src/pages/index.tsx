import Head from "next/head";

import styles from '@/styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogzada | Home</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👌 Hey, welcome</span>
          <h1>News about the
            <span> React </span>
            world.
          </h1>
          <p>
            Get access to all th publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img
          className={styles.illustration}
          src="/react_animation.svg"
          alt="React logo with a person"
        />
      </main>
    </>
  )
}
