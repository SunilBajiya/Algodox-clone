import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar bg-white w-full shadow">
        <div className="container mx-auto flex justify-between items-center p-5">
          <a className="navbar-brand text-black text-2xl" href="https://algodox.co.in/">Algodox</a>
          <div className="md:hidden" onClick={toggleMenu}>
            <button className="text-black focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
          <ul className={`navbar-nav md:flex space-x-4 font-medium ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li className="nav-item">
              <Link className={`nav-link p-2 md:p-6 ${location.pathname === '/' ? 'text-yellow-500' : 'text-black hover:text-yellow-500'}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link p-2 md:p-6 ${location.pathname === '/aboutUs' ? 'text-yellow-500' : 'text-black hover:text-yellow-500'}`} to="/aboutUs">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link p-2 md:p-6 ${location.pathname === '/Service' ? 'text-yellow-500' : 'text-black hover:text-yellow-500'}`} to="/Service">Service</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link p-2 md:p-6 ${location.pathname === '/Project' ? 'text-yellow-500' : 'text-black hover:text-yellow-500'}`} to="/Project">Project</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link p-2 md:p-6 ${location.pathname === '/Blog' ? 'text-yellow-500' : 'text-black hover:text-yellow-500'}`} to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link p-2 md:p-6 ${location.pathname === '/ContactUs' ? 'text-yellow-500' : 'text-black hover:text-yellow-500'}`} to="/ContactUs">Contact</Link>
            </li>
          </ul>
          <div className="hidden md:flex rounded-md box-border text-black w-auto h-10 p-1 cursor-pointer tracking-widest border-2 font-bold hover:text-red-500 border-red-500 items-center">
            Connect Now <span className="ml-2">&rarr;</span>
          </div>
        </div>
       
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
