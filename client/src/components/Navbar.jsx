import React from "react";

import Logo from "../img/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo' srcset='' />
        </div>
        <div className='links'>
          <Link className='link' to='./?cat=nodejs'>
            <h6>Node Js</h6>
          </Link>
          <Link className='link' to='./?cat=reactjs'>
            <h6>React Js</h6>
          </Link>
          <Link className='link' to='./?cat=express'>
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
          <span>Isaac</span>
          <span>Logout</span>
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
