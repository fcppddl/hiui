import React from 'react'
import Watermark from '../src'

/**
 * @title 自定义疏密度
 */
export const Density = () => {
  return (
    <>
      <h1>Density</h1>
      <div className="watermark-density__wrap" style={{ height: 402, width: '100vw' }}>
        <Watermark
          density="low"
          content={['HIUI', '做中台，就用 HIUI']}
          logo="https://xiaomi.github.io/hiui/static/img/logo.png?241e0618fe55d933c280e38954edea05"
        ></Watermark>
      </div>
    </>
  )
}
