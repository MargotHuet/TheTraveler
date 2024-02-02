import { Fragment, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import  TheTravelerLogo  from "./images/TheTravelerLogo.png";
import Auth from "../context/Auth";

function Navbar() {
    const { isAuthenticated } = useContext(Auth);
    return (
        <Fragment>
            <nav className="bg-sky-300">
                <div className="max-w-screen-xl bg-sky-300 flex flex-wrap items-center justify-between mx-auto p-4">

                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={TheTravelerLogo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue">The Traveler</span>
                    </Link>
                    {/* Mobile navbar view */}
                <button data-collapse-toggle="navbar-dropdown" type="button" className="bg-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
                
                <div className="flex justify-center hidden bg-sky-300 w-full md:block md:w-auto " id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white bg-sky-300">
                <li>
                    <Link to="/" className="block py-2 px-3 text-black bg-sky-300 rounded md:text-black-700 md:p-0 md:text-blue-500 md:bg-transparent" aria-current="page">Accueil</Link>
                </li>
                {/* Dropdown button */}
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between bg-sky-300 w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 md:w-auto md:hover:text-blue-500 focus:text-white hover:bg-gray-700 md:hover:bg-transparent">Nos voyages <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                {/* Dropdown menu --> */}
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-sky-300 divide-y divide-gray-100 rounded-lg shadow w-4">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                    </li>
                    </ul>
                <div class="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
            </div>
        </li>
        <li>
          <Link to="/feed" className="block bg-sky-300 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Fil d'actu</Link>
        </li>
        <li>
          <Link to="/about" 
                className="block bg-sky-300 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                  A propos
          </Link>
        </li>
        <li>
          <Link to="/contact" 
                className="block bg-sky-300 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                  Contact
          </Link>
        </li>
        <li>
          <Link to="/register" 
                className="block bg-sky-300 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                  Inscription
          </Link>
        </li>

        { (!isAuthenticated && (
          <>
            <li>
              <Link to="/login" 
                    className="block bg-sky-500 py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                    Connexion
              </Link>
            </li>
          </>
        )) || (
          <>
            <li>
              <Link to="/userAccount"
                    className="block bg-sky-500 py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                    Mon compte
              </Link>
            </li>
            <li>
              <Link to="/login"
                    className="block bg-sky-500 py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                    Deconnexion
              </Link>
            </li>
          </>
        )}

      </ul>
    </div>
  </div>
</nav>
        </Fragment>
    )
}

export default Navbar;