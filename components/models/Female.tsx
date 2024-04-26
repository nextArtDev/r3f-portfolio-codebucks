'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { DoubleSide, FrontSide, BackSide } from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
  }
  materials: {
    Ovary2: THREE.MeshStandardMaterial
    Uterus_Whole: THREE.MeshStandardMaterial
  }
}

export default function Female(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/female.glb') as GLTFResult

  const modifyMaterial = (material: any, side = DoubleSide) => {
    const mat = material.clone()
    mat.side = side
    return mat
  }
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={modifyMaterial(materials.Ovary2)}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={modifyMaterial(materials.Ovary2)}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={modifyMaterial(materials.Uterus_Whole)}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/female.glb')
