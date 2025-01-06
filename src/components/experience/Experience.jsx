"use client";
import { Canvas } from "@react-three/fiber";

import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import { editable as e } from "@theatre/r3f";

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Suspense, useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import projectState from "@/app/coords/Experiencev1.json";
import { GalleryVillage } from "./GalleryVillage";
import { Loader } from "@react-three/drei";

studio.initialize();
studio.extend(extension);
studio.ui.hide();

const project = getProject("Experiencev1", {
  state: projectState,
});
const mainSheet = project.sheet("Main");

const transitions = {
  Home: [0, 14],
  Gallery1: [14, 27],
  Gallery2: [27, 40],
  Gallery3: [40, 49],
  Gallery4: [49, 55],
  Gallery5: [0, 55],
};

const Experience = () => {
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

      const currentTransition = transitions[currentScreen];
      const targetTransition = transitions[targetScreen];

      if (!targetTransition) {
        return;
      }

      const screenSequence = [
        "Home",
        "Gallery1",
        "Gallery2",
        "Gallery3",
        "Gallery4",
        "Gallery5",
      ];
      const currentIndex = screenSequence.indexOf(currentScreen);
      const targetIndex = screenSequence.indexOf(targetScreen);

      const isForward =
        targetScreen === "Gallery5" ? false : targetIndex > currentIndex;

      const range = isForward
        ? targetTransition
        : [
            Math.min(currentTransition[0], currentTransition[1]),
            Math.max(currentTransition[0], currentTransition[1]),
          ];

      mainSheet.sequence
        .play({
          range,
          direction: isForward ? "normal" : "reverse",
          rate: isForward ? 1 : 3,
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
      />
      <section className="w-full h-full">
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <ambientLight intensity={2.5} />
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
