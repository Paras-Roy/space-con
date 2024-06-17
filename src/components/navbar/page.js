"use client"

import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import { UserAuth } from '@/app/context/AuthContext';

const Navbar = () => {
  const {user, googleSignIn, logOut} = UserAuth();
  const [loading, setLoading] = useState(true);


  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);


  return (
    <nav className=" flex align-middle top-0 backdrop-blur-md text-base border-b-[0.5px] border-b-slate-700 flex-row text-white py-4 px-6 md:px-10 w-3/4 justify-between" >
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
          {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li className="p-2 cursor-pointer">
            <Link href ="/signup">
            Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}

          </div>
        
    </nav>
  );
};

export default Navbar;
