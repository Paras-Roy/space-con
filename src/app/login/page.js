"use client"
import React, { useState } from 'react';

export default function Login() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-900 text-gray-900'}`}>
      <div className={`w-96 p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className="text-3xl font-semibold mb-4">Log In</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <button className={`w-full py-2 text-white rounded-md ${darkMode ? 'bg-blue-500' : 'bg-blue-700'}`}>
          Log In
        </button>
        <div className="mt-4 text-center">
          <label className="cursor-pointer">
            <input type="checkbox" className="mr-1" />
            Remember me
          </label>
        </div>
        <div className="mt-4 text-center">
          <span className="cursor-pointer underline" onClick={toggleDarkMode}>
            Toggle Dark Mode
          </span>
        </div>
      </div>
    </div>
  );
}
