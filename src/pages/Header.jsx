import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white  container mx-auto">
    <div className=" flex my-6 gap-[880px] w-full items-center ">
      <NavLink to="/" className="text-2xl font-bold text-black">
        Vention
      </NavLink>
      <nav className=" flex gap-[30px] items-center">
          <select name="What we do" id="2" className='outline-none hover:text-blue-500'>
            <option value="What we do">
            What we do
            </option>
          </select>
        <NavLink to="/portfolio" className="text-gray-700 hover:text-blue-500" activeClassName="underline">Portfolio</NavLink>
        <NavLink to="/insights" className="text-gray-700 hover:text-blue-500" activeClassName="underline">Insights</NavLink>
        <NavLink to="/about-us" className="text-gray-700 hover:text-blue-500" activeClassName="underline">
          <select name="About us" id="2">
            <option value="About us">
            About us
            </option>
          </select>
        </NavLink>
        <NavLink to="/contact-us" className="text-gray-700 hover:text-white hover:bg-pink-900 ease-linear duration-1000  bg-orange-500 py-2 px-4 rounded" activeClassName="underline">Contact us</NavLink>
      </nav>
    </div>
  </header>
  );
};

export default Header;
