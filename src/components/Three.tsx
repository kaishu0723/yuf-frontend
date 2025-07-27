'use client'
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface SphereProps{
    position?:[number,number,number]
}

const Sphere:React.FC<SphereProps>=({position})=>{

    const sphereRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.2 * delta;
    }
  });

    return (
        <mesh ref={sphereRef} position={position}>
            <sphereGeometry args={[3,32,32]}/>
            <meshBasicMaterial color="white" wireframe={true}/>
        </mesh>
    );
};

const Three:React.FC = () => {
    return (
        <div className="w-full h-full relative flex">
            <div className="w-1/2 h-full grid place-content-center">
                <h2 className="text-4xl border-b-2 my-2">Yufuin Infomation</h2>
                <p>
                Ask using the button on the right.
                </p>
            </div>
            <Canvas camera={{position:[0,0,5], fov:75}} className="w-1/2 h-full">
                <ambientLight intensity={1}/>
                <directionalLight intensity={1} position={[0,0,5]}/>
                <Sphere position={[0,0,0]}/>
            </Canvas>
        </div>
    );
}

export default Three;