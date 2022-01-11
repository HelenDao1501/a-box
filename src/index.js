import React from 'react';
import ReactDOM from 'react-dom';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './index.css';

const Scene = () => (
  <Canvas camera={{position:[5,5,5]}}>
    <mesh position={[0,0,0]}>
      <boxBufferGeometry args={[3,3,3]} />
      <meshNormalMaterial/>
    </mesh>
    <OrbitControls />

  </Canvas>
)

ReactDOM.render(
  <Scene/>,
  document.getElementById('root')
);
