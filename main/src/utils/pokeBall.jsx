import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Ball from "../assets/models/pokeball.gltf";
import { useGLTF } from "@react-three/drei";

export default function PokeBall(props) {
  const meshRef = useRef();
  const { scene } = useGLTF(Ball);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.09;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.4}>
      <primitive object={scene} />
    </mesh>
  );
}
