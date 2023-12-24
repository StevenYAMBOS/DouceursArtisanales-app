const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto bg-black relative bottom-0">
        <div className="footer-wrapper w-9/12 h-full m-auto py-4 px-4 block justify-center text-center md:flex md:flex-row md:justify-between">

          <div className="logo-wrapper flex justify-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo Douceurs Artisanales"
            />
          </div>

          <div className="nav-menu block">
            <div className="block font-medium text-center py-4 px-4 md:flex md:flex-row lg:flex lg:flex-row">
            <div className="p-2">
                <a href="/" className="text-white">Accueil</a>
            </div>
            <div className="p-2">
                <a href="/" className="text-white">Où sont mes desserts ?</a>
            </div>
            <div className="p-2">
                <a href="/" className="text-white">Histoires</a>
            </div>
            <div className="p-2">
                <a href="/" className="text-white">Contact</a>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
