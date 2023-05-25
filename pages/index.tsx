import Form from "@/components/Form";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>juanvarela-twitter</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Header label="Home" />

      <Form placeholder="What's happening?" />
    </>
  );
}
