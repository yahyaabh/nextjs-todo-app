import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>todo-app</title>
      </Head>

      <Header />

      <Content />

      <Footer />
    </div>
  );
}
