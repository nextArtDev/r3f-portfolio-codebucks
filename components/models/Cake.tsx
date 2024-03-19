'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Cake = React.memo(function Cake(props) {
  const { nodes, materials } = useGLTF(
    '/models/handpainted_watercolor_cake-v2.glb'
  )

  const modelRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007
    }
  })
  return (
    <group {...props} rotation={[0.4, 0, 0]} dispose={null} ref={modelRef}>
      <group scale={0.004}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.frosting001_cake_0 as THREE.Mesh).geometry}
          material={materials.cake}
          position={[-22.315, -155.92, -340.088]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.leaves003_cake_0 as THREE.Mesh).geometry}
          material={materials.cake}
          position={[-22.315, -155.92, -340.088]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.blueberry001_cake_0 as THREE.Mesh).geometry}
          material={materials.cake}
          position={[-22.315, -155.92, -340.088]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.strawberry001_cake_0 as THREE.Mesh).geometry}
          material={materials.cake}
          position={[-22.315, -155.92, -340.088]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.cake001_cake_0 as THREE.Mesh).geometry}
          material={materials.cake}
          position={[-22.315, -155.92, -340.088]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.leaves004_cake_0 as THREE.Mesh).geometry}
          material={materials.cake}
          position={[-22.315, -155.92, -340.088]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.berries001_cake_0 as THREE.Mesh).geometry}
          material={materials.cake}
          position={[-22.315, -155.92, -340.088]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
})
export default Cake
useGLTF.preload('/models/handpainted_watercolor_cake-v2.glb')
