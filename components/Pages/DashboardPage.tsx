

import React from 'react';
import Breadcrumb from '../Dashboard/04-Templates/Breadcrumb';
import Content from '../Dashboard/04-Templates/Content';
import Footer from '../Dashboard/04-Templates/Footer';
import Navbar from '../Dashboard/04-Templates/Navbar';
import Sidebar from '../Dashboard/04-Templates/Sidebar';
import Layout from '../Layout';
import Navbar2 from '../Dashboard/04-Templates/Navbar2';

export default function DashboardPage() {
  return (
    <div className="bg-[#0b0c0e]">
      <Navbar2/>
      <Navbar />
      <Layout>
        <div className="">
          <Breadcrumb />
          <Sidebar />
          <Content />
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

