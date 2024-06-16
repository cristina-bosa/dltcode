'use client';
import Image from "next/image";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ServiceItem from "components/ServiceItem";
import ProductItem from "components/ProductItem";
import BannerItem from "components/BannerItem";
import Chart from "components/Chart";
import Legend from "components/Legend";
import { motion } from "framer-motion"
import BannerData from '@/mock/BannerItem.json'
import ServicesData from '@/mock/ServicesItem.json'
import LegendData from '@/mock/LegendItem.json'
import { useState } from "react";

const Home = () => {
  const bannerData = BannerData;
  const servicesData = ServicesData;
  const legendData = LegendData;
  const [isActive, setIsActive] = useState(null);
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <>
      <Navbar />
      <main>
        <motion.section
          id="about-us"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="about-us"
        >
          <section className="about-us__information">
            <h1>Protegemos el presente, para asegurar el futuro</h1>
            <p>Somos una firma de servicios profesionales especializada en consultoría estratégica, ciberseguridad y formación</p>
            <p>Nuestro equipo, liderado por consultores experimentados en tecnología, ciberseguridad e innovación disruptiva, está comprometido a guiar la transformación digital de tu empresa. </p>
            <button className="btn btn--primary">Conócenos</button>
          </section>
          <section className="about-us__image">
            <Image src="/hero.png" alt="Hero-image" width={500} height={647} loading="lazy" />
          </section>
        </motion.section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: false }}
          className="services">
          <h2>Servicios</h2>
          <section className="services__list">
            {servicesData.map((service) => {
              return (
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  iconDown={service.iconDown}
                  iconUp={service.iconUp}
                  description={service.description}
                />
              )
            })}
          </section>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: false }}
          className="banner">
          <section className="banner__content">
            <section className="banner__information">
              <h2>Protegiento datos corporativos, proactivos y reactivos</h2>
              <p>Confía en nosotros para proteger tus datos corporativos que garantice la seguridad de tu empresa en un mundo digital en constante evolución.</p>
            </section>
            <section className="banner__list">
              <h4>Destacamos</h4>
              {bannerData.map((banner) => {
                return (
                  <BannerItem
                    key={banner.id}
                    id={banner.id}
                    title={banner.title}
                    iconDown={banner.iconDown}
                    iconUp={banner.iconUp}
                    description={banner.description}
                  />
                );
              })}
            </section>
          </section>
        </motion.section>
        <motion.section
          id="products"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: false }}
          className="products">
          <h2>Productos</h2>
          <section className="products__list">
            <ProductItem
              title="0Malware"
              content="Malware es una solución versátil que detecta y combate malware y spyware en cualquier dispositivo, utilizando tecnologías avanzadas como DPI, Cloud Computing, Data Mining y Blockchain. 
              Ofrece protección completa y prevención de pérdida de datos (DLP) para todo tipo de usuarios y empresas."
            />
            <ProductItem
              title="RiskDetective"
              content="Los programas de gestión de superficie de ataque, como RiskDetective, evalúan continuamente las redes empresariales para reducir riesgos y mejorar la seguridad cibernética, fortaleciendo así las relaciones comerciales."
            />
          </section>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.4, delay: 0.10 }}
          viewport={{ once: false }}
          className="chart">
          <section className="chart__content">
            <h2>Tu seguridad, nuestro compromiso</h2>
            <p>La ciberseguridad es una prioridad para nosotros.</p>
            <p>Nuestro equipo de expertos en seguridad cibernética se dedica a proteger tu empresa de amenazas digitales y garantizar la continuidad de tu negocio.</p>
            <section className="chart__legend">
              {legendData.map((legend) => {
                return (
                  <Legend
                    key={legend.id}
                    title={legend.title}
                    percentage={legend.percentage}
                    color={legend.color}
                  />
                );
              })}
            </section>
          </section>
          <section className="chart__chart">
            <Chart />
          </section>
        </motion.section>
      </main >
      <Footer />
    </>
  );
}

export default Home;