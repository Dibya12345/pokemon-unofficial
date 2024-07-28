import React from "react";
import { Canvas } from "@react-three/fiber";
import PokeBall from "../utils/pokeBall";
function Header() {
  return (
    <header className="header">
      <section className="header_container">
        <div className="poke_ball" style={{ height: "100px" }}>
          <Canvas style={{ width: "80px" }}>
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
        <ul className="header_menu">hello</ul>
      </section>
    </header>
  );
}

export default Header;
