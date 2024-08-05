import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: 250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <button
        onClick={() => setToggle(!isToggled)}
        style={{ border: "none", background: "white" }}
      >
        <IconContext.Provider value={{ color: "blue", size: "1.8em" }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
            style={{ position: "absolute", top: "120px", right: "10px" }}
          >
            <NavbarItems />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
