import DashboardPage from "@/components/Pages/DashboardPage";
import LoginPage from "@/components/Pages/LoginPage";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Universitas Kensen</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <LoginPage/>
    </>
  );
};

export default Index;
