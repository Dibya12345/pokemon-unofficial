import React from "react";
import { Canvas } from "@react-three/fiber";
import PokeBall from "../utils/pokeBall";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

function Header() {
  return (
    <header className="header">
      <section className="header_container">
        <div className="poke_ball" style={{ height: "100px" }}>
          <Canvas
            style={{ width: "60px" }}
            camera={{ position: [0, 0, 5], fov: 75 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <PokeBall position={[-1.2, 0, 0]} />
          </Canvas>
        </div>
        <div className="header_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokemon_logo"
            width="40em"
          />
        </div>
        <div className="header_hamburger">
          <IconContext.Provider value={{ color: "blue", size: "1.8em" }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </div>
        <nav className="navbar">Hello</nav>
      </section>
    </header>
  );
}

export default Header;
