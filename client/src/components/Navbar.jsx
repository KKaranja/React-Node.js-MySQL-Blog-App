import React from "react";

import Logo from "../img/logo.png";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link className='link' to='/'>
            <img src={Logo} alt='logo' srcSet='' />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to='./?cat=nodejs'>
            <h6>Node Js</h6>
          </Link>
          <Link className='link' to='./?cat=reactjs'>
            <h6>React Js</h6>
          </Link>
          <Link className='link' to='./?cat=expressjs'>
            <h6>Express Js</h6>
          </Link>
          <Link className='link' to='./?cat=html'>
            <h6>HTML</h6>
          </Link>
          <Link className='link' to='./?cat=css'>
            <h6>CSS</h6>
          </Link>
          <Link className='link' to='./?cat=seo'>
            <h6>SEO</h6>
          </Link>
          <Link className='link' to='./?cat=design'>
            <h6>Design</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className='link' to='/login'>
              Login
            </Link>
          )}
          <span className='write'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
