"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {


  return (
    <nav className="fixed flex align-middle top-0 backdrop-blur-md text-base border-b-[0.5px] border-b-slate-700 flex-row text-white py-4 px-6 md:px-10 w-3/4 justify-between" >
          <div className="flex flex-row justify-center text-center align-middle">
            <Link href="/" className='flex flex-row items-center'>
              Space-Con
            </Link>
          </div>
        <div className="flex border-2 py-2 px-8 gap-4 bg- border-gray-800 rounded-full flex-row">
            <Link href="/marketplace">
              <span className="mx-2">Market Place</span>
            </Link>
            <Link href="/discuss">
              <span className="mx-2">Discussion</span>
            </Link>
            <Link href="/faq">
              <span className="mx-2">FAQ</span>
            </Link>
            <Link href="/about">
              <span className="mx-2">About</span>
            </Link>
          </div>
          <div className="flex flex-row">

            <button className="mx-2">Log In</button>
            <button className="mx-2">Sign Up</button>

          </div>
        
    </nav>
  );
};

export default Navbar;
