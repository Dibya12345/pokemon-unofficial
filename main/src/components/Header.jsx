import React from "react";
import { Canvas } from "@react-three/fiber";
import PokeBall from "../utils/pokeBall";
function Header() {
  return (
    <header className="header">
      <section className="header_container">
        <div className="poke_ball">
          <Canvas>
            <PokeBall position={[-1.2, 0, 0]} />
          </Canvas>
        </div>
        <div className="header_logo"></div>
        <ul className="header_menu"></ul>
      </section>
    </header>
  );
}

export default Header;
