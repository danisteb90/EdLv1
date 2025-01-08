import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { editable as e } from "@theatre/r3f";

export function GalleryVillage(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF(
    "/models/galleryVillage/galleryVillage.gltf"
  );
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.keys(actions).forEach((action) => {
      actions[action].play();
    });
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="metarig" position={[0, 0, 54.232]}>
          <primitive object={nodes.spine} />
        </group>
        <group
          name="rigmaestro"
          position={[377.006, 12.341, -747.779]}
          rotation={[0, -1.522, 0]}
          scale={1.469}
        >
          <primitive object={nodes["DEF-spine"]} />
          <primitive object={nodes["DEF-pelvisL"]} />
          <primitive object={nodes["DEF-pelvisR"]} />
          <primitive object={nodes["DEF-thighL"]} />
          <primitive object={nodes["DEF-thighR"]} />
          <primitive object={nodes["DEF-shoulderL"]} />
          <primitive object={nodes["DEF-upper_armL"]} />
          <primitive object={nodes["DEF-shoulderR"]} />
          <primitive object={nodes["DEF-upper_armR"]} />
          <primitive object={nodes["DEF-breastL"]} />
          <primitive object={nodes["DEF-breastR"]} />
          <group name="maestro">
            <skinnedMesh
              name="maestro_1"
              geometry={nodes.maestro_1.geometry}
              material={materials.tex2Mat}
              skeleton={nodes.maestro_1.skeleton}
            />
            <skinnedMesh
              name="maestro_2"
              geometry={nodes.maestro_2.geometry}
              material={materials.clothesMat}
              skeleton={nodes.maestro_2.skeleton}
            />
          </group>
        </group>
        <group
          name="rigestudiante1"
          position={[370.881, 12.341, -747.373]}
          rotation={[-Math.PI, 1.522, -Math.PI]}
          scale={1.469}
        >
          <primitive object={nodes["DEF-spine_1"]} />
          <primitive object={nodes["DEF-pelvisL_1"]} />
          <primitive object={nodes["DEF-pelvisR_1"]} />
          <primitive object={nodes["DEF-thighL_1"]} />
          <primitive object={nodes["DEF-thighR_1"]} />
          <primitive object={nodes["DEF-shoulderL_1"]} />
          <primitive object={nodes["DEF-upper_armL_1"]} />
          <primitive object={nodes["DEF-shoulderR_1"]} />
          <primitive object={nodes["DEF-upper_armR_1"]} />
          <primitive object={nodes["DEF-breastL_1"]} />
          <primitive object={nodes["DEF-breastR_1"]} />
          <skinnedMesh
            name="estudiante1"
            geometry={nodes.estudiante1.geometry}
            material={materials.clothesMat}
            skeleton={nodes.estudiante1.skeleton}
          />
        </group>
        <group
          name="rigestudiante3"
          position={[365.685, 12.341, -746.154]}
          rotation={[-Math.PI, 1.522, -Math.PI]}
          scale={1.469}
        >
          <primitive object={nodes["DEF-spine_2"]} />
          <primitive object={nodes["DEF-pelvisL_2"]} />
          <primitive object={nodes["DEF-pelvisR_2"]} />
          <primitive object={nodes["DEF-thighL_2"]} />
          <primitive object={nodes["DEF-thighR_2"]} />
          <primitive object={nodes["DEF-shoulderL_2"]} />
          <primitive object={nodes["DEF-upper_armL_2"]} />
          <primitive object={nodes["DEF-shoulderR_2"]} />
          <primitive object={nodes["DEF-upper_armR_2"]} />
          <primitive object={nodes["DEF-breastL_2"]} />
          <primitive object={nodes["DEF-breastR_2"]} />
          <group name="estudiante3">
            <skinnedMesh
              name="estudiante3_1"
              geometry={nodes.estudiante3_1.geometry}
              material={materials.clothesMat}
              skeleton={nodes.estudiante3_1.skeleton}
            />
            <skinnedMesh
              name="estudiante3_2"
              geometry={nodes.estudiante3_2.geometry}
              material={materials.tex2Mat}
              skeleton={nodes.estudiante3_2.skeleton}
            />
          </group>
        </group>
        <group
          name="rigestudiante2"
          position={[366.878, 12.341, -750.051]}
          rotation={[-Math.PI, 1.522, -Math.PI]}
          scale={1.469}
        >
          <primitive object={nodes["DEF-spine_3"]} />
          <primitive object={nodes["DEF-pelvisL_3"]} />
          <primitive object={nodes["DEF-pelvisR_3"]} />
          <primitive object={nodes["DEF-thighL_3"]} />
          <primitive object={nodes["DEF-thighR_3"]} />
          <primitive object={nodes["DEF-shoulderL_3"]} />
          <primitive object={nodes["DEF-upper_armL_3"]} />
          <primitive object={nodes["DEF-shoulderR_3"]} />
          <primitive object={nodes["DEF-upper_armR_3"]} />
          <primitive object={nodes["DEF-breastL_3"]} />
          <primitive object={nodes["DEF-breastR_3"]} />
          <skinnedMesh
            name="estudiante2"
            geometry={nodes.estudiante2.geometry}
            material={materials.clothesMat}
            skeleton={nodes.estudiante2.skeleton}
          />
        </group>
        <group
          name="rigestudiante4"
          position={[368.813, 12.341, -743.914]}
          rotation={[-Math.PI, 1.522, -Math.PI]}
          scale={1.469}
        >
          <primitive object={nodes["DEF-spine_4"]} />
          <primitive object={nodes["DEF-pelvisL_4"]} />
          <primitive object={nodes["DEF-pelvisR_4"]} />
          <primitive object={nodes["DEF-thighL_4"]} />
          <primitive object={nodes["DEF-thighR_4"]} />
          <primitive object={nodes["DEF-shoulderL_4"]} />
          <primitive object={nodes["DEF-upper_armL_4"]} />
          <primitive object={nodes["DEF-shoulderR_4"]} />
          <primitive object={nodes["DEF-upper_armR_4"]} />
          <primitive object={nodes["DEF-breastL_4"]} />
          <primitive object={nodes["DEF-breastR_4"]} />
          <skinnedMesh
            name="estudiante4"
            geometry={nodes.estudiante4.geometry}
            material={materials.clothesMat}
            skeleton={nodes.estudiante4.skeleton}
          />
        </group>
        <mesh
          name="waterfall1"
          geometry={nodes.waterfall1.geometry}
          material={materials.fog3Mat}
          position={[-0.149, 4.033, -82.848]}
          rotation={[-0.39, 0.006, 0.032]}
        />
        <mesh
          name="waterFog2"
          geometry={nodes.waterFog2.geometry}
          material={materials.fog3Mat}
          position={[0.571, 0.373, -78.637]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          name="waterFog1"
          geometry={nodes.waterFog1.geometry}
          material={materials.fog3Mat}
          position={[0.668, -0.834, -79.906]}
          rotation={[-Math.PI, 0, 0]}
        />
        <group
          name="boat"
          position={[0.012, 1.262, -84.156]}
          rotation={[-0.043, -0.135, 0.044]}
        >
          <mesh
            name="boat_1"
            geometry={nodes.boat_1.geometry}
            material={materials.tex1Mat}
          />
          <mesh
            name="boat_2"
            geometry={nodes.boat_2.geometry}
            material={materials.clothesMat}
          />
          <mesh
            name="boat_3"
            geometry={nodes.boat_3.geometry}
            material={materials.tex3Mat}
          />
        </group>
        <mesh
          name="riverstars"
          geometry={nodes.riverstars.geometry}
          material={materials.starsMat}
        />
        <mesh
          name="river"
          geometry={nodes.river.geometry}
          material={materials.water2Mat}
        />
        <mesh
          name="wffog1"
          geometry={nodes.wffog1.geometry}
          material={materials.fog5Mat}
          position={[350.693, -1.929, -1584.91]}
          rotation={[-Math.PI, 0.202, 0]}
        />
        <mesh
          name="wffog2"
          geometry={nodes.wffog2.geometry}
          material={materials.fog5Mat}
          position={[357.032, -0.379, -1569.156]}
          rotation={[-Math.PI, 0.202, 0]}
        />
        <mesh
          name="wffog3"
          geometry={nodes.wffog3.geometry}
          material={materials.fog5Mat}
          position={[360.14, -0.379, -1583.372]}
          rotation={[-Math.PI, 0.202, 0]}
        />
        <mesh
          name="particles1"
          geometry={nodes.particles1.geometry}
          material={materials.tex1LightMat}
          position={[361.685, 110.639, -1506.496]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          name="particles2"
          geometry={nodes.particles2.geometry}
          material={materials.tex1LightMat}
          position={[346.294, 45.581, -1563.134]}
          rotation={[-Math.PI, 0, 0]}
        />
        <group name="villageFinal">
          <mesh
            name="villageFinal_1"
            geometry={nodes.villageFinal_1.geometry}
            material={materials.fieldMat}
          />
          <mesh
            name="villageFinal_2"
            geometry={nodes.villageFinal_2.geometry}
            material={materials.m1v3Mat}
          />
          <mesh
            name="villageFinal_3"
            geometry={nodes.villageFinal_3.geometry}
            material={materials.Mf1Mat}
          />
          <mesh
            name="villageFinal_4"
            geometry={nodes.villageFinal_4.geometry}
            material={materials.m1v4Mat}
          />
          <mesh
            name="villageFinal_5"
            geometry={nodes.villageFinal_5.geometry}
            material={materials.mf1v2Mat}
          />
          <mesh
            name="villageFinal_6"
            geometry={nodes.villageFinal_6.geometry}
            material={materials.tex1Mat}
          />
          <mesh
            name="villageFinal_7"
            geometry={nodes.villageFinal_7.geometry}
            material={materials.tex2Mat}
          />
          <mesh
            name="villageFinal_8"
            geometry={nodes.villageFinal_8.geometry}
            material={materials.tex2LightMat}
          />
          <mesh
            name="villageFinal_9"
            geometry={nodes.villageFinal_9.geometry}
            material={materials.tex1LightMat}
          />
          <mesh
            name="villageFinal_10"
            geometry={nodes.villageFinal_10.geometry}
            material={materials.tex3Mat}
          />
          <mesh
            name="villageFinal_11"
            geometry={nodes.villageFinal_11.geometry}
            material={materials.clothesMat}
          />
          <mesh
            name="villageFinal_12"
            geometry={nodes.villageFinal_12.geometry}
            material={materials.fog5Mat}
          />
          <mesh
            name="villageFinal_13"
            geometry={nodes.villageFinal_13.geometry}
            material={materials.foliageMat}
          />
          <mesh
            name="villageFinal_14"
            geometry={nodes.villageFinal_14.geometry}
            material={materials.rice1Mat}
          />
          <mesh
            name="villageFinal_15"
            geometry={nodes.villageFinal_15.geometry}
            material={materials.grassMat}
          />
          <mesh
            name="villageFinal_16"
            geometry={nodes.villageFinal_16.geometry}
            material={materials.riceWaterMat}
          />
          <mesh
            name="villageFinal_17"
            geometry={nodes.villageFinal_17.geometry}
            material={materials.sky1Mat}
          />
          <mesh
            name="villageFinal_18"
            geometry={nodes.villageFinal_18.geometry}
            material={materials.Water}
          />
          <mesh
            name="villageFinal_19"
            geometry={nodes.villageFinal_19.geometry}
            material={materials.fogMid}
          />
          <mesh
            name="villageFinal_20"
            geometry={nodes.villageFinal_20.geometry}
            material={materials.fogWeak}
          />
          <mesh
            name="villageFinal_21"
            geometry={nodes.villageFinal_21.geometry}
            material={materials.fogStrong}
          />
          <mesh
            name="villageFinal_22"
            geometry={nodes.villageFinal_22.geometry}
            material={materials.rice2Mat}
          />
          <mesh
            name="villageFinal_23"
            geometry={nodes.villageFinal_23.geometry}
            material={materials["Clothes.003"]}
          />
          <mesh
            name="villageFinal_24"
            geometry={nodes.villageFinal_24.geometry}
            material={materials.water2Mat}
          />
          <mesh
            name="villageFinal_25"
            geometry={nodes.villageFinal_25.geometry}
            material={materials.Field2WF}
          />
          <mesh
            name="villageFinal_26"
            geometry={nodes.villageFinal_26.geometry}
            material={materials.Field1WF}
          />
          <mesh
            name="villageFinal_27"
            geometry={nodes.villageFinal_27.geometry}
            material={materials.FieldBrown}
          />
          <mesh
            name="villageFinal_28"
            geometry={nodes.villageFinal_28.geometry}
            material={materials.lake1}
          />
          <mesh
            name="villageFinal_29"
            geometry={nodes.villageFinal_29.geometry}
            material={materials.Draco}
          />
          <mesh
            name="villageFinal_30"
            geometry={nodes.villageFinal_30.geometry}
            material={materials.Portal}
          />
          <mesh
            name="villageFinal_31"
            geometry={nodes.villageFinal_31.geometry}
            material={materials.Logo}
          />
        </group>
        <e.group theatreKey="galeria">
          <group
            name="cuadro1"
            position={[-0.09, -0.715, 2.15]}
            rotation={[0, 0.011, -0.003]}
          >
            <mesh
              name="cuadro1_1"
              geometry={nodes.cuadro1_1.geometry}
              material={materials.marcoCuadro}
            />
            <mesh
              name="cuadro1_2"
              geometry={nodes.cuadro1_2.geometry}
              material={materials.cuadro1}
            />
          </group>
          <group
            name="cuadro2"
            position={[0.379, 7.443, 40.174]}
            rotation={[0, 0.011, -0.003]}
          >
            <mesh
              name="cuadro2_1"
              geometry={nodes.cuadro2_1.geometry}
              material={materials.marcoCuadro}
            />
            <mesh
              name="cuadro2_2"
              geometry={nodes.cuadro2_2.geometry}
              material={materials.cuadro2}
            />
          </group>
          <group
            name="cuadro3"
            position={[-5.289, 7.364, 37.712]}
            rotation={[0, 0.011, -0.003]}
          >
            <mesh
              name="cuadro3_1"
              geometry={nodes.cuadro3_1.geometry}
              material={materials.marcoCuadro}
            />
            <mesh
              name="cuadro3_2"
              geometry={nodes.cuadro3_2.geometry}
              material={materials.cuadro3}
            />
          </group>
          <group
            name="cuadro4"
            position={[-0.83, 6.721, 36.705]}
            rotation={[0, 0.011, -0.003]}
          >
            <mesh
              name="cuadro4_1"
              geometry={nodes.cuadro4_1.geometry}
              material={materials.marcoCuadro}
            />
            <mesh
              name="cuadro4_2"
              geometry={nodes.cuadro4_2.geometry}
              material={materials.cuadro4}
            />
          </group>
          <group name="cuadro5">
            <mesh
              name="cuadro5_1"
              geometry={nodes.cuadro5_1.geometry}
              material={materials.marcoCuadro}
            />
            <mesh
              name="cuadro5_2"
              geometry={nodes.cuadro5_2.geometry}
              material={materials.cuadroPared1}
            />
          </group>
          <group name="cuadro6">
            <mesh
              name="cuadro6_1"
              geometry={nodes.cuadro6_1.geometry}
              material={materials.marcoCuadro}
            />
            <mesh
              name="cuadro6_2"
              geometry={nodes.cuadro6_2.geometry}
              material={materials.cuadroPared2}
            />
          </group>
          <e.group theatreKey="cuadroCentral">
            <group name="cuadroCentral" position={[-3.271, 6.99, 31.63]}>
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
          </e.group>
          <mesh
            name="galeriaFondo"
            geometry={nodes.galeriaFondo.geometry}
            material={materials.baseColor_3}
          />
          <mesh
            name="humanoInicial"
            geometry={nodes.humanoInicial.geometry}
            material={materials.humano}
            position={[-0.465, -0.339, 0.018]}
          />
        </e.group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/galleryVillage/galleryVillage.gltf");
