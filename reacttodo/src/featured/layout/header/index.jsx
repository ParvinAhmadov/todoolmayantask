import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
 
  return (
    <>
      <header className="flex flex-wrap place-items-center">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-4 flex w-full justify-between items-center">
            <Link to="/" className="text-3xl font-bold font-heading">
              <img
                className="h-9"
                src="https://png.pngtree.com/templates/sm/20180611/sm_5b1edb6d03c39.jpg"
                alt="logo"
              />
            </Link>
            <ul className="hidden md:flex px-4  font-semibold font-heading space-x-12">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/BlogdDetailPage">blogdetail</Link>
              </li>
              <li>
              <Link to="/Blog">Blog</Link>
                
            </li>
          
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
