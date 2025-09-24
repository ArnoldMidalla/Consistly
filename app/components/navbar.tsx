'use client'
import { useState } from "react";
import { motion, Transition } from "motion/react"

import Link from "next/link";

export default function Navbar() {
      const [darkMode, setDarkMode] = useState(false)
  function toggle(){
    setDarkMode(!darkMode)
 document.body.classList.toggle('dark');
  }
  return (
    <section className="flex absolute top-0 h-16 items-center justify-center w-full">
      <div>
        <Link href="/">One</Link>
      </div>
      <div>
        <Link href="/">Two</Link>
      </div>
      <button onClick={toggle}>Switch to {!darkMode? 'dark': 'light'}mode</button>
      
    </section>
  );
}
