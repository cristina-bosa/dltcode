'use client';
import Image from "next/image";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ServiceItem from "components/ServiceItem";
import ProductItem from "components/ProductItem";
import Chart from "components/Chart";
import Legend from "components/Legend";


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
              iconDown="LuArrowDownRight"
              iconUp="LuArrowUpLeft"
              content="Auditoria, adedecuación, consultoría, análisis de riesgo, normativa y cumplimiento, gestión y administración, análisis, monitorización"
            />
            <ServiceItem
              title="Forense"
              iconDown="LuArrowDownRight"
              iconUp="LuArrowUpLeft"
              content="Análisis Forense, consultoria, incident response, e-discovery, audio/video, whatsapp, email, industrial"
            />
            <ServiceItem
              title="Recuperación de datos"
              iconDown="LuArrowDownRight"
              iconUp="LuArrowUpLeft"
              content="Moviles, ordenadores, sistemas RAID, servidores, tarjetas de memoria, SCADA"
            />
            <ServiceItem
              title="Blockchain"
              iconDown="LuArrowDownRight"
              iconUp="LuArrowUpLeft"
              content="Auditoría, consultoría, adecuación, normativa y cumplimiento, ERC-20, CCI framework, Trust over IP primer"
            />
          </section>
        </section>
        <section className="banner">
          <section className="banner__image">
            <Image src="/hero.png" alt="Hero-image" width={500} height={600} loading="lazy" />
          </section>
          <section className="banner__content">
            <h2>Protegiento datos corporativos, proactivos y reactivos</h2>
            <p>Confía en nosotros para proteger tus datos corporativos que garantice la seguridad de tu empresa en un mundo digital en constante evolución.</p>
            <h4>Destacamos</h4>
            <ServiceItem
              title="Profesionales expertos"
              iconDown="LuArrowDownRight"
              iconUp="LuArrowUpLeft"
              content="Nuestros equipos de seguridad participan como instructores en la C1b3rWall Academy, cubriendo áreas como pentesting, forense, Hacking de vehículos y más."
            />
            <ServiceItem
              title="Reconocimientos"
              iconDown="LuArrowDownRight"
              iconUp="LuArrowUpLeft"
              content="Hemos tenido el honor de clausurar eventos de prestigio como CiberSeguridad 2020 BARCELONA de IDG/Computerworld, lo que refleja nuestro compromiso y excelencia en seguridad cibernética."
            />
            <ServiceItem
              title="Participación internacional"
              iconDown="LuArrowDownRight"
              iconUp="LuArrowUpLeft"
              content="Este año, estamos programados como ponentes invitados en eventos de gran importancia como EUROPOL y QuBit Praga, donde compartiremos nuestro conocimiento y experiencia en seguridad"
            />
          </section>
        </section>
        <section className="products">
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
        </section>
        <section className="chart">
          <section className="chart__content">
            <h2>Tu seguridad, nuestro compromiso</h2>
            <p>La ciberseguridad es una prioridad para nosotros.</p>
            <p>Nuestro equipo de expertos en seguridad cibernética se dedica a proteger tu empresa de amenazas digitales y garantizar la continuidad de tu negocio.</p>
            <Legend 
              title="Acceso no autorizado"
              percentage="37.94"
              color="#0D1B2A"
            />
          </section>
          <section className="chart__chart">
            <Chart />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;