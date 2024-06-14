'use client';
import Image from "next/image";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ServiceItem from "./components/ServiceItem";


const Home = () => {


  return (
    <>
      <Navbar />
      <main className="container">
        <section className="about-us">
          <section className="about-us__information">
            <h1>Protegemos el presente, para asegurar el futuro</h1>
            <p>Somos una firma de servicios profesionales especializada en consultoría estratégica, ciberseguridad y formación</p>
            <p>Nuestro equipo, liderado por consultores experimentados en tecnología, ciberseguridad e innovación disruptiva, está comprometido a guiar la transformación digital de tu empresa. </p>
            <button className="btn btn--primary">Conócenos</button>
          </section>
          <section className="about-us__image">
            <Image src="/hero.png" alt="Hero-image" width={500} height={647} loading="lazy" />
          </section>
        </section>
        <section className="services">
          <h2>Servicios</h2>
          <section className="services__list">
            <ServiceItem
              title="Hacking & SOC"
              icon="FiPlusSquare"
              content={null}
            />
            <ServiceItem
              title="Forense"
              icon="FiPlusSquare"
              content={null}
            />
            <ServiceItem
              title="Recuperación de datos"
              icon="FiPlusSquare"
              content={null}
            />
            <ServiceItem
              title="Blockchain"
              icon="FiPlusSquare"
              content={null}
            />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;