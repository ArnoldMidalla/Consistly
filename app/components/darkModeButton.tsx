"use client";
import { useState } from "react";
import * as motion from "motion/react-client";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);
  function toggle() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }
  return (
    //  <button onClick={toggle}>
    //     Switch to {!darkMode ? "dark" : "light"}mode
    //   </button>
    <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: "flex-" + (darkMode ? "start" : "end"),
            }}
            onClick={toggle}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
  );
}

const container = {
    width: 60,
    height: 20,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
}

const handle = {
    width: 20,
    height: 20,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
}