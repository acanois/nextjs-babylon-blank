'use client'

import React from 'react'
import {
  ArcRotateCamera,
  Vector3,
  Color4,
  HemisphericLight,
  Scene,
} from '@babylonjs/core'
import SceneComponent from 'babylonjs-hook'

const onSceneReady = (scene: Scene) => {
  scene.clearColor = new Color4(0.2, 0.2, 0.5, 1.0)

  const canvas = scene.getEngine().getRenderingCanvas()
  canvas!.width = window.innerWidth
  canvas!.height = window.innerHeight

  const camera: ArcRotateCamera = new ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    30, // Camera distance
    Vector3.Zero(),
    scene
  )
  camera.attachControl(canvas, true)

  const light = new HemisphericLight('light', new Vector3(-1, 1, 1), scene)
  light.intensity = 0.7
}

const onRender = (scene: Scene) => {

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SceneComponent
          antialias
          onSceneReady={onSceneReady}
          onRender={onRender}
          id="my-canvas"
        />
      </header>
    </div>
  )
}

export default App
