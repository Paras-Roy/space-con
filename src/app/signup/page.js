'use client'

import { useState } from 'react';
import { auth } from '../firbase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './styles.module.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Account created successfully');
    } catch (e) {
      console.log('Error creating account:', e);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Signup</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.green_btn}>
          Sign Up
        </button>

      </form>
  </div>
);
}
