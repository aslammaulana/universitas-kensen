

import React from 'react';
import Footer from '../Dashboard/04-Templates/Footer';
import Navbar from '../Dashboard/04-Templates/NavbarMobile';
import Sidebar from '../Dashboard/04-Templates/Sidebar';
import Layout from '../Layout';
import Navbar2 from '../Dashboard/04-Templates/NavbarDekstop';
import ContentInput from '../InputNilai/ContentInput';

export default function InputNilaiPage() {
    return (
        <div className="bg-[#1c2431]">
            <Navbar2 />
            <Navbar />
            <Layout>
                <div className="">
                    <Sidebar />
                    <ContentInput />
                </div>
            </Layout>
            <Footer />
        </div>
    );
}

