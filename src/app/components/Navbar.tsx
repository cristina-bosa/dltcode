import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (

    <header className="navbar">
      <Image src="/logo.svg" alt="DLT Code" className="navbar__brand" width={150} height={150} />
      <nav >
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link href="/#about-us">Sobre nosotros</Link>
          </li>
          <li className="navbar__item">
            <Link href="/#services">Servicios</Link>
          </li>
          <li className="navbar__item">
            <Link href="/#products">Productos</Link>
          </li>
          <li className="navbar__item">
            <Link href="/">Protección</Link>
          </li>
          <li className="navbar__item">
            <Link href="/">Herramientas</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}
export default Navbar