import React, { useState } from 'react'
import Preview from '../src'
import Button from '@hi-ui/button'

/**
 * @title 基础用法
 */
export const Basic = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h1>Basic</h1>
      <div className="preview-basic__wrap">
        <Button
          onClick={() => {
            setShow(true)
          }}
        >
          按钮
        </Button>
        <Preview
          title="a.png"
          src={'https://i8.mifile.cn/a1/pms_1531116957.78852376.jpg'}
          visible={show}
          onClose={() => {
            setShow(false)
          }}
        />
      </div>
    </>
  )
}
