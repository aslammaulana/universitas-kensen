

import React from 'react';
import Breadcrumb from '../ThemeBuilder/Breadcrumb';
import Content from '../Dashboard/04-Templates/Content';
import Footer from '../ThemeBuilder/Footer';
import Navbar from '../ThemeBuilder/NavbarMobile';
import Sidebar from '../ThemeBuilder/Sidebar';
import Layout from '../ThemeBuilder/Layout';
import Navbar2 from '../ThemeBuilder/NavbarDekstop';
import ContentProfil from '../Profil/ContentProfile';

export default function ProfilPage() {
    return (
        <div className="bg-[#1c2431]">
            <Navbar2 />
            <Navbar />
            <Layout>
                <div className="">
                    <Sidebar />
                    <ContentProfil />
                </div>
            </Layout>
            <Footer />
        </div>
    );
}

