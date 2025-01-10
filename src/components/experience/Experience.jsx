"use client";
import { Canvas } from "@react-three/fiber";

import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import { editable as e } from "@theatre/r3f";

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Suspense, useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import projectState from "@/app/coords/Experiencev1.1.json";
import { GalleryVillage } from "./GalleryVillage";
import { Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

studio.initialize();
studio.extend(extension);
studio.ui.hide();

const project = getProject("Experiencev2", {
  state: projectState,
});
const mainSheet = project.sheet("Main");

const transitions = {
  Home: [0, 14],
  Gallery1: [14, 27],
  Gallery2: [27, 40],
  Gallery3: [40, 49],
  Gallery4: [49, 55],
  End: [55, 60],
};

const Experience = ({ isReady }) => {
  const cameraTargetRef = useRef();
  const isSetup = useRef(false);

  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Intro");

  useEffect(() => {
    project.ready.then(() => {
      if (currentScreen === targetScreen) {
        return;
      }
      if (isSetup.current && currentScreen === "Intro") {
        return;
      }

      const targetTransition = transitions[targetScreen];
      if (!targetTransition) {
        return;
      }

      mainSheet.sequence
        .play({
          range: targetTransition,
          direction: "normal",
          rate: 1,
        })
        .then(() => {
          setCurrentScreen(targetScreen);
        });
    });
  }, [targetScreen, currentScreen]);

  return (
    <>
      <UI
        currentScreen={currentScreen}
        onScreenChange={setTargetScreen}
        isAnimating={currentScreen !== targetScreen}
        isReady={isReady}
      />
      <section className="w-full h-full">
        <Canvas
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
            antialias: false,
          }}
          dpr={[1, 2]}
          performance={{
            min: 0.5,
            max: 1,
            debounce: 200,
          }}
        >
          <ambientLight intensity={1.5} />
          <SheetProvider sheet={mainSheet}>
            <PerspectiveCamera
              position={[0, 0, 100]}
              fov={40}
              near={0.1}
              far={1000}
              makeDefault
              theatreKey="camera"
              lookAt={cameraTargetRef}
            />
            <e.mesh
              theatreKey="cameraTarget"
              visible="editor"
              ref={cameraTargetRef}
            >
              <octahedronGeometry args={[0.25, 0]} />
              <meshPhongMaterial color="yellow" />
            </e.mesh>
            <Suspense fallback={null}>
              <GalleryVillage />
            </Suspense>
          </SheetProvider>
        </Canvas>
        <Loader />
      </section>
    </>
  );
};

export default Experience;
