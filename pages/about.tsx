import React from "react";
import Head from "next/head";
import Header from "@/components/List/Header";

export default function About() {
  return (
    <div>
      <Head>
        <title>Box Movie | List</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <h1>Barudak Ngawi Enjoyerss</h1>
      </main>
    </div>
  );
}
