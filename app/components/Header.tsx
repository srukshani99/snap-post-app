'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {

  const [sideBarStatus, setSideBarStatus] = useState(false);

  const toggle = () => {
    setSideBarStatus(prev => !prev);
  }

  return (
    <nav>
      <ul className={`sidebar ${sideBarStatus ? 'active' : 'deactive'}`}>
        <li className=''><Link href="#" onClick={toggle}><HiOutlineX className='mobile-icons' /></Link></li>
        <li><Link href="/" onClick={toggle}>Home</Link></li>
        <li><Link href="/favourites" onClick={toggle}>Favourites</Link></li>
      </ul>

      <ul className='header-bar'>
        <li><Link href="/"> <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="logo"
        />
          <p className="logo_text">SnapPost</p></Link></li>
        <li className="hideOnMobile"><Link href="/">Home</Link></li>
        <li className="hideOnMobile"><Link href="/favourites">Favourites</Link></li>
        <li className={`menu-button`} onClick={toggle}><Link href="#"><HiMenu className='mobile-icons' /></Link></li>
      </ul>
    </nav>
  )
}

export default Header;