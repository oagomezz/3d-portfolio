import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      {/* hemisphere light adjusts the lighting of the scene, increasing intensity increases brightness of color. groundColor changes the base of the object, giving it the initial value indicated can you hexcolor value or string values */}
      <hemisphereLight 
        intensity={0.1} 
        groundColor="black"/>
        {/* pointLight adjusts the intensity of the light commented out it darkens the object */}
        <pointLight intensity={1} />
        {/* spotLight adjusts the lighting from an aerial perspective */}
        <spotLight 
          position={[-20,50,10]} />
          {/* object contains the object of the scene IE the computer, scale position and rotation change the orientation of the object */}
        <primitive 
          object={computer.scene}
          scale={0.75}
          position={[0,-3.25,-1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3,5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true}}
    > 
      <Suspense >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas