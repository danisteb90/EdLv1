/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/gallery/Gallery.gltf -o src/model -r public 
*/

import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/gallery/Gallery.gltf"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="cuadroCentral"
          position={[0.025, -0.084, -17.607]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.964}
        >
          <mesh
            name="cuadroCentral_1"
            geometry={nodes.cuadroCentral_1.geometry}
            material={materials.cuadroCentral}
          />
          <mesh
            name="cuadroCentral_2"
            geometry={nodes.cuadroCentral_2.geometry}
            material={materials.paspartu}
          />
          <mesh
            name="cuadroCentral_3"
            geometry={nodes.cuadroCentral_3.geometry}
            material={materials.marcoCuadro}
          />
        </group>
        <group
          name="cuadro1"
          position={[-3.669, 0.072, -9.435]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Plane002"
            geometry={nodes.Plane002.geometry}
            material={materials.cuadro1}
          />
          <mesh
            name="Plane002_1"
            geometry={nodes.Plane002_1.geometry}
            material={materials.marcoCuadro}
          />
        </group>
        <mesh
          name="humano"
          geometry={nodes.humano.geometry}
          material={materials.humano}
          position={[0.24, -1.856, -6.001]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.777, 1.813, 1.813]}
        />
        <mesh
          name="fondo"
          geometry={nodes.fondo.geometry}
          material={materials.baseColor_3}
          position={[0, -1.238, -18]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="cuadro4"
          position={[2.371, -0.066, -15.239]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.602}
        >
          <mesh
            name="Plane007"
            geometry={nodes.Plane007.geometry}
            material={materials.cuadro4}
          />
          <mesh
            name="Plane007_1"
            geometry={nodes.Plane007_1.geometry}
            material={materials.marcoCuadro}
          />
        </group>
        <group
          name="cuadro2"
          position={[3.433, -0.072, -11.582]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.846}
        >
          <mesh
            name="Plane010"
            geometry={nodes.Plane010.geometry}
            material={materials.cuadro2}
          />
          <mesh
            name="Plane010_1"
            geometry={nodes.Plane010_1.geometry}
            material={materials.marcoCuadro}
          />
        </group>
        <group
          name="cuadro3"
          position={[-1.969, 0, -13.408]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.718}
        >
          <mesh
            name="Plane011"
            geometry={nodes.Plane011.geometry}
            material={materials.cuadro3}
          />
          <mesh
            name="Plane011_1"
            geometry={nodes.Plane011_1.geometry}
            material={materials.marcoCuadro}
          />
        </group>
        <group
          name="cuadro4001"
          position={[1.91, -0.135, -17.637]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.602}
        >
          <mesh
            name="Plane003"
            geometry={nodes.Plane003.geometry}
            material={materials.cuadroPared2}
          />
          <mesh
            name="Plane003_1"
            geometry={nodes.Plane003_1.geometry}
            material={materials.marcoCuadro}
          />
        </group>
        <group
          name="cuadro3001"
          position={[-1.848, -0.142, -17.615]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.616}
        >
          <mesh
            name="Plane004"
            geometry={nodes.Plane004.geometry}
            material={materials.cuadroPared1}
          />
          <mesh
            name="Plane004_1"
            geometry={nodes.Plane004_1.geometry}
            material={materials.marcoCuadro}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/gallery/Gallery.gltf");
