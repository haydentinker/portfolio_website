/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: Joseph Stanley (https://sketchfab.com/tanjoerine)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/galax-tea-c3f5fc0760144f6f85ed61e67195c683
Title: Galax-tea
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.lambert2SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.lambert2SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.lambert2SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert3SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.lambert4SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
