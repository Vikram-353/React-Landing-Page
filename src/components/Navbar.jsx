import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // Import for smooth scrolling

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-white/10 border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Vikram Ranjan</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 ">
            <li>
              <Link to="features" smooth={true} duration={500} className="hover:text-purple-500 hover:cursor-pointer">
                Features
              </Link>
            </li>
            <li>
              <Link to="workflow" smooth={true} duration={500} className="hover:text-purple-500 hover:cursor-pointer">
                Workflow
              </Link>
            </li>
            <li>
              <Link to="price" smooth={true} duration={500} className="hover:text-purple-500 hover:cursor-pointer">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} duration={500} className="hover:text-purple-500 hover:cursor-pointer">
                Testimonials
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a className="py-2 px-2 border rounded-md" href="#">
              Sign In
            </a>
            <button className="bg-gradient-to-r from-purple-700 to-blue-950 py-2 px-3 rounded-md">
              Create an account
            </button>
          </div>
          <div className="lg:hidden md-flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {drawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {drawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">
                <Link to="features" smooth={true} duration={500} className="hover:text-purple-500">
                  Features
                </Link>
              </li>
              <li className="py-4">
                <Link to="workflow" smooth={true} duration={500} className="hover:text-purple-500">
                  Workflow
                </Link>
              </li>
              <li className="py-4">
                <Link to="price" smooth={true} duration={500} className="hover:text-purple-500">
                  Pricing
                </Link>
              </li>
              <li className="py-4">
                <Link to="testimonials" smooth={true} duration={500} className="hover:text-purple-500">
                  Testimonials
                </Link>
              </li>
            </ul>
            <div className="flex space-x-6 py-2">
              <a className="py-2 px-2 border rounded-md" href="#">
                Sign In
              </a>
              <button className="bg-gradient-to-r from-purple-700 to-blue-950 py-2 px-3 rounded-md">
                Create an account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
