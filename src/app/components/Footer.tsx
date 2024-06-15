import Image from "next/image";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <section className="footer__content">
        <Image src="/logo-negative.svg" alt="DLT Code" width={200} height={100} />
        <section className="footer__content__contact">          
          <p><a href="mailto:info@dltcode.es">info@dltcode.es</a></p>
          <p><a href="tel:+34931311540">+34 931 31 15 40</a></p>
          <p><a href="https://www.linkedin.com/company/dlt-code/">LinkedIn</a></p>
        </section>
        <section className="footer__content__policy">
          <a>Politica de privacidad</a>
          <a>Politica de cookies</a>
          <a>Aviso legal</a>
        </section>
        <p>&copy; {year} - DLT Code</p>
      </section>
    </footer>

  );
}
export default Footer