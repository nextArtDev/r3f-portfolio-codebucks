'use client'
import React, { useMemo, useRef } from 'react'
import { Text, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { DoubleSide, FrontSide, BackSide } from 'three'
// https://threejs.org/editor/

export default function Wizard(props: any) {
  const { nodes, materials } = useGLTF('/models/coffeeMenu2.glb')
  const modelRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  const modifyMaterial = (material: any, side = DoubleSide) => {
    const mat = material.clone()
    mat.side = side
    return mat
  }

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        -1.4 + Math.sin(state.clock.elapsedTime * 0.3) * 2.5
      modelRef.current.rotation.y += 0.003
      // modelRef.current.rotation.y += Math.cos(state.clock.elapsedTime) * 0.003
      // modelRef.current.rotation.x =
      //   +0.2 + Math.sin(state.clock.elapsedTime) * 0.15
    }
  })
  return (
    <>
      <Text
        // font={'/fonts/PPNeueMontreal-Bold.otf'}
        position={[0, 0, -1]}
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        scale={0.7}
      >
        Coffee Menu
      </Text>

      <group
        // scale={viewport.width * 2}
        rotation={[0.6, 0, 0.1]}
        dispose={null}
        ref={modelRef}
        {...props}
      >
        <group scale={0.3} position={[0, 0.6, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Circle002 as THREE.Mesh).geometry}
            material={modifyMaterial(materials['Material.001'])}
            position={[0.012, 0.353, 0.004]}
            rotation={[-3.113, -0.663, -3.095]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Circle as THREE.Mesh).geometry}
              material={modifyMaterial((nodes.Circle as THREE.Mesh).material)}
              position={[0, -0.353, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Circle001 as THREE.Mesh).geometry}
              material={modifyMaterial(
                (nodes.Circle001 as THREE.Mesh).material
              )}
              position={[0, -0.353, 0]}
              scale={[1, 1, 0.752]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Circle003 as THREE.Mesh).geometry}
            material={modifyMaterial(materials['Material.004'])}
            position={[3.195, 0.186, -0.037]}
            rotation={[Math.PI, -0.684, Math.PI]}
            scale={1.922}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Cube as THREE.Mesh).geometry}
              material={modifyMaterial(materials.Choc)}
              position={[-0.288, 0.235, -0.395]}
              rotation={[-0.028, 0.144, 0.024]}
              scale={[0.229, 0.229, 0.169]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Cube001 as THREE.Mesh).geometry}
              material={modifyMaterial(materials.Choc)}
              position={[-0.433, 0.229, 0.213]}
              rotation={[3.08, -1.116, 3.062]}
              scale={0.111}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube002 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Choc)}
            position={[2.29, 0.621, -0.511]}
            rotation={[-0.123, 0.801, 0.108]}
            scale={0.419}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube003 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Choc)}
            position={[2.388, 0.631, 0.355]}
            rotation={[-2.941, 1.138, 2.957]}
            scale={[0.264, 0.264, 0.195]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube004 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Choc)}
            position={[2.643, 0.604, -1.1]}
            rotation={[3.048, 0.701, 3.038]}
            scale={0.396}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube005 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Choc)}
            position={[3.447, 0.645, -0.1]}
            rotation={[-3.13, -0.861, -3.129]}
            scale={0.357}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube006 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Choc)}
            position={[3.153, 0.576, 0.907]}
            rotation={[-3.094, -0.363, 1.798]}
            scale={[0.307, 0.307, 0.226]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Circle004 as THREE.Mesh).geometry}
            material={modifyMaterial(materials['Material.006'])}
            position={[0.058, 0.711, 2.704]}
            rotation={[3.072, -0.392, 2.814]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Circle005 as THREE.Mesh).geometry}
            material={modifyMaterial(nodes.Circle005 as THREE.Mesh).material}
            position={[0.49, -0.147, 0.375]}
            rotation={[Math.PI, -0.684, Math.PI]}
            scale={0.607}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Circle006 as THREE.Mesh).geometry}
            material={modifyMaterial(materials['Material.006'])}
            position={[1.614, 0.29, 2.726]}
            rotation={[Math.PI, -0.684, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Stick001 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Cinnamon)}
            position={[2.461, 0.29, -2.034]}
            rotation={[0, 1.316, 0]}
            scale={0.561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Stick002 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Cinnamon)}
            position={[-2.6, 0.62, -0.289]}
            rotation={[0.14, -1.005, -2.993]}
            scale={0.561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube007 as THREE.Mesh).geometry}
            material={modifyMaterial(materials.Choc)}
            position={[3.112, 0.668, 0.136]}
            rotation={[0.703, -1.059, -2.383]}
            scale={0.242}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/models/coffeeMenu2.glb')
