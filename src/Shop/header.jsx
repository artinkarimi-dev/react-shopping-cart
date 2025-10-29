
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";

export default class Header extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  render() {
    const { link, text } = this.props;
    const { mobileMenuOpen } = this.state;

    return (
      <div className="bg-gray-50 text-gray-800">
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white font-bold shadow flex-shrink-0">
                  V
                </div>
                <div className="flex items-center leading-none">
                  <span className="text-xl font-extrabold tracking-tight mr-2">
                    ViaX
                  </span>
                  <span className="text-indigo-600 font-semibold text-sm sm:text-base">
                    shop
                  </span>
                </div>
              </div>

              
              <div className="sm:hidden flex items-center">
                <button
                  onClick={this.toggleMobileMenu}
                  className="p-2 focus:outline-none"
                >
                  {mobileMenuOpen ? (
                    <FaXmark className="text-2xl" />
                  ) : (
                    <FaBars className="text-2xl" />
                  )}
                </button>
              </div>

          
              <div className="hidden sm:flex items-center bg-gray-800 rounded-full px-3 py-1 gap-3 w-[420px] max-w-[48vw] mx-5">
                <input
                  className="bg-transparent text-white outline-none text-sm md:text-base w-full placeholder:text-gray-300 p-1"
                  placeholder="Search products..."
                />
              </div>

              
              <div className="ml-4 hidden sm:flex flex-shrink-0">
                <Link to={link}>
                  <button className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-xs sm:text-sm md:text-base whitespace-nowrap">
                    <FaCartShopping className="text-lg sm:text-xl text-amber-200 flex-shrink-0" />
                    <span className="truncate">{text}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          
          {mobileMenuOpen && (
            <div className="sm:hidden bg-white border-t border-gray-200">
              <div className="flex flex-col gap-2 px-4 py-3">
              
                <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 gap-2">
                  <input
                    className="bg-transparent text-white outline-none text-sm w-full placeholder:text-gray-300"
                    placeholder="Search products..."
                  />
                </div>

               
                <Link to={link}>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm justify-center w-full mt-2 whitespace-nowrap">
                    <FaCartShopping className="text-xl text-amber-200 flex-shrink-0" />
                    {text}
                  </button>
                </Link>

                
                <Link
                  to="/"
                  className="py-2 text-gray-800 hover:text-indigo-600 border-b border-gray-200"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="py-2 text-gray-800 hover:text-indigo-600 border-b border-gray-200"
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className="py-2 text-gray-800 hover:text-indigo-600 border-b border-gray-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </header>
      </div>
    );
  }
}
