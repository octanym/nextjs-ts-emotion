import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled"

const Container = styled.div`

`;
const Main = styled.main`

`;
const BlogTitle = styled.h1`

`;
const title: string = 'Nextjs + TypeScript';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
      </main>
    </div>
  )
}

export default Home
