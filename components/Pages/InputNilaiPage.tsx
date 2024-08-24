

import React from 'react';
import Footer from '../ThemeBuilder/Footer';
import Navbar from '../ThemeBuilder/NavbarMobile';
import Sidebar from '../ThemeBuilder/Sidebar';
import Layout from '../ThemeBuilder/Layout';
import Navbar2 from '../ThemeBuilder/NavbarDekstop';
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

