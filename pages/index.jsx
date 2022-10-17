import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getFoodBanks } from "../server/database";
// import { useAuthState } from "react-firebase-hooks/auth"; // to check if user is signed in
import axios from "axios";
import { useEffect, useState } from "react";

// this should be homepage, just using for testing right now
// maybe move some of this to map
export default function Home({ foodBanksList }) {
  const foodBanksComponent = foodBanksList.map((foodbank) => (
    // <li key={fb.id}>
    <li key="test">
      <p>{foodbank.programName}</p>
    </li>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>LocalToMe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>LocalToMe</h1>

      <main className={styles.main}>
        <h2>HOMEPAGE</h2>
        <p className="map-link">
          Checkout <Link key="link-to-map" href="/map">the map!</Link>
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Everything in this function happens on the server
  const foodBanksData = await getFoodBanks();
  const foodBanksList = JSON.parse(JSON.stringify(foodBanksData));
  // console.log(foodBanksList);
  return {
    props: { foodBanksList }, // will be passed to the page component as props
  };
}
