import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { Vector3 } from 'three';
import React from 'react'

export const David = () => {
 const obj = useLoader(OBJLoader, './davidObj/model.obj')

  return (
    <primitive object={obj} position={new Vector3(10, -5, 0)}/>
  )
}
