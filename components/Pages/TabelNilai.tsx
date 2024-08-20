

import React from 'react';
import Breadcrumb from '../Dashboard/04-Templates/Breadcrumb';
import Content from '../Dashboard/04-Templates/Content';
import Footer from '../Dashboard/04-Templates/Footer';
import Navbar from '../Dashboard/04-Templates/NavbarMobile';
import Sidebar from '../Dashboard/04-Templates/Sidebar';
import Layout from '../Layout';
import Navbar2 from '../Dashboard/04-Templates/NavbarDekstop';
import ContentTableNilai from '../TableNilai/ContentTableNilai';

export default function TabelNilaiPage() {
    return (
        <div className="bg-[#1c2431]">
            <Navbar2 />
            <Navbar />
            <Layout>
                <div className="">
                    <Sidebar />
                    <ContentTableNilai />
                </div>
            </Layout>
            <Footer />
        </div>
    );
}

