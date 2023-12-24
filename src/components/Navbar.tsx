import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full bg-transparent mt-4">
        <div className="bg-transparent rounded-3xl m-auto px-4 h-full flex flex-wrap justify-between w-9/12">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo Douceurs Artisanales"
            />
          </a>

          {/* Responsive Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden focus:outline-none text-black"
            aria-label="Toggle Menu"
          >
          <FontAwesomeIcon icon={faBars} />
          </button>

          <div
            className={`md:flex items-center justify-between w-full md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-md md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent">
              <li className="md:border-none lg:border-none">
                <a
                  href="#"
                  className="py-2 px-3 md:p-0 text-black"
                  aria-current="page"
                >
                  Accueil
                </a>
              </li >
              <li className="md:border-none lg:border-none">
                <a href="/" className="py-2 px-3 md:p-0 text-black">
                  Où sont mes desserts ?
                </a>
              </li>
              <li className="md:border-none lg:border-none">
                <a href="#" className="py-2 px-3 md:p-0 text-black">
                  Histoires
                </a>
              </li>
              <li className="md:border-none lg:border-none mb-4 md:mb-0 lg:mb-0">
                <a href="/contact" className="py-2 mr-4 px-3 md:p-0 text-black">
                  Contact
                </a>
              </li>
            </ul>

            <a
              href="/"
              className="bg-black text-white p-4 rounded-xl font-bold hover:bg-white hover:text-black hover:transition hover:duration-300"
            >
              Connexion
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
