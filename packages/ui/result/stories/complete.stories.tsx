import React from 'react'
import Result, { IconNetError } from '../src'
import Button from '@hi-ui/button'

/**
 * @title 带按钮
 */
export const Complete = () => {
  return (
    <>
      <h1>完整功能</h1>
      <div className="result-basic__wrap" style={{ width: '760px' }}>
        <Result
          image={<IconNetError />}
          title="网络连接失败"
          content="这是对网络连接失败的说明文案"
        >
          <div>
            {[
              <Button key="refresh">刷新</Button>,
              <Button type="primary" key="back">
                返回
              </Button>,
            ]}
            <div
              style={{
                whiteSpace: 'pre-wrap',
                marginTop: '30px',
                padding: '30px',
                background: '#f2f4f7',
                boxSizing: 'border-box',
                fontSize: '14px',
                color: '#1F2733',
                textAlign: 'left',
              }}
            >
              {'请尝试：\n\n1. 检查您的电脑网络是否正常\n2. 关闭 Wi-Fi 重新链接'}
            </div>
          </div>
        </Result>
      </div>
    </>
  )
}
