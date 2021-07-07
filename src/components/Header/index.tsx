import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <>
    <nav className="relative py-6 bg-skin-fill">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link className="flex items-center space-x-2 text-skin-base" to="/">
          <svg
            width="55"
            height="3"
            viewBox="0 0 55 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current"
          >
            <line
              x1="55"
              y1="1.5"
              y2="1.5"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-semibold">smitray.me</span>
        </Link>
        <div className="lg:hidden">
          <button
            type="button"
            className="flex items-center p-3 text-skin-base navbar-burger"
          >
            <svg
              className="block w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link className="text-sm font-semibold text-skin-base" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold text-gray-500 hover:text-yellow-700"
              to="/"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold text-gray-500 hover:text-yellow-700"
              to="/"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold text-gray-500 hover:text-yellow-700"
              to="/"
            >
              Contribution
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold text-gray-500 hover:text-yellow-700"
              to="/"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Header;
