import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

function Navbar() {
  return (
    <>
    {/* top, left position at 0. padding 3000. fixed makes it fixed but for the entire horizantal */}
      <nav className="fixed top-0 left-0 w-full p-4 z-3000 bg-transparent-500">
      {/* container & mx-auto - Centers the content within the navbar. */}
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-[#000000]">
            ChronCare
          </Link>
          <ul className="flex space-x-9">
            <li>
              <Link to="/" className="text-[#000000] hover:text-emerald-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-[#000000] hover:text-emerald-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-[#000000] hover:text-emerald-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-[#000000] hover:text-emerald-300 flex items-center">
                <User className="mr-2" size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;