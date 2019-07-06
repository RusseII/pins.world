import React, { useEffect } from 'react'
import { CesiumWidget } from 'cesium'
import 'cesium/source/Widgets/CesiumWidget/CesiumWidget.css'

const world = () => {
  useEffect(() => new CesiumWidget('world'), [])
  return <div id="world" style={{ height: '110vh', width: '100vw' }} />
}

export default world
