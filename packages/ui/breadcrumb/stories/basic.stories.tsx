import React from 'react'
import Breadcrumb from '../src'

export const Basic = () => {
  const [data] = React.useState([
    {
      title: '首页',
      path: '/home',
    },
    {
      title: '列表',
      path: '/list',
    },
    {
      title: '手机详情',
      path: '/phone',
    },
  ])

  return (
    <>
      <h1>基础用法</h1>
      <div className="breadcrumb-basic__wrap">
        <Breadcrumb
          data={data}
          onClick={(path) => {
            console.log('go path: ', path)
          }}
        />
        <Breadcrumb
          data={data}
          size="sm"
          onClick={(path) => {
            console.log('go path: ', path)
          }}
        />
      </div>
    </>
  )
}
