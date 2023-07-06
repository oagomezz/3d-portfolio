import {Suspense, useEffect, useState} from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../loader"

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./lighthouse/scene.gltf')
  return (
    <mesh>
      {/* hemisphere light adjusts the lighting of the scene, increasing intensity increases brightness of color. groundColor changes the base of the object, giving it the initial value indicated can you hexcolor value or string values */}
      <hemisphereLight 
        intensity={0.3} 
        groundColor="black"/>
        {/* pointLight adjusts the intensity of the light commented out it darkens the object */}
        <pointLight intensity={0.5} />
        {/* spotLight adjusts the lighting from an aerial perspective */}
        <spotLight 
          position={[-20,0,0]} 
          // angle changes the size of the light's spotlight focus on back left of the object to notice the difference in the spotlight position
          angle={0.17}
          penumbra={1}
          intensity={0.5}
          castShadow
          shadow-mapSize={1024}
        />
          {/* object contains the object of the scene IE the computer, scale position and rotation change the orientation of the object */}
          
        <primitive 
          object={computer.scene}
          scale={ isMobile ? 1.2 : 1.5}
          position={isMobile ? [0.3, -1, 0] : [-0.5,-1.3,0.1]}
          rotation={[0, 2.8, 0]}
        />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [-5,5,0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true}}
    > 
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas