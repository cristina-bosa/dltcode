import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (

    <header className="navbar">
      <Image src="/logo.svg" alt="DLT Code" className="navbar__brand" width={100} height={100} />
      <nav >
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link href="/">Nosotros</Link>
          </li>
          <li className="navbar__item">
            <Link href="/about">Servicios</Link>
          </li>
          <li className="navbar__item">
            <Link href="/contact">Productos</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}
export default Navbar