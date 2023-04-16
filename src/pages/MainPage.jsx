import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';
import '../styles/logo.css';
import '../styles/home.css';
import '../styles/section-tittle.css';
import '../styles/sobre-mim.css';
import '../styles/contato.css';
import '../styles/tablet.css';
import '../styles/mobile.css';
import Header from '../components/Header';
import SobreMim from '../components/SobreMim';
import Skills from '../components/Skills';
import Projetos from '../components/Projetos';
import Contatos from '../components/Contatos';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Testemonials from '../components/Testemonials';

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <section className="sobre-mim" id="sobre-mim">
          <SobreMim />
          <Skills />
        </section>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Projetos />
          <Testemonials />
          <Contatos />
          <Footer />
        </section>
      </main>
    </>
  );
}
