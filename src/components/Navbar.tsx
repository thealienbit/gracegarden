const Navbar = () => {
  return (
    <div className="mr-10">
      <nav className=" border-gray-200 dark:bg-gray-900 bg-sage-200 opacity-75 fixed w-9/10 z-20  start-0 border-b shadow-xl  m-2 p-1 rounded-3xl">
        <div className="flex flex-wrap justify-between w-full items-center">
          <div className="p-2 flex items-center">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo"
              className="w-12 object-cover opacity-100"
            />
            Grace Garden
          </div>
          <div className="flex font-bold ">
            <div className="p-2 opacity-100 text-black">
              <a href="#home">Home</a>
            </div>
            <div className="p-2 opacity-100 text-black">
              <a href="#services">Services</a>
            </div>
            <div className="p-2 opacity-100 text-black">
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className="p-2 opacity-100 text-black">
              <a href="#contactus">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
