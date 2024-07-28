import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import Ball from "../assets/models/pokeball.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function PokeBall(props) {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, Ball);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.09;

  });

  return (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene} scale={1.4} />;
    </mesh>
  );
}
