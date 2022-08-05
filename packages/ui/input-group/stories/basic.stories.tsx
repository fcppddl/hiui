import React from 'react'
import Input from '@hi-ui/input'
import Select from '@hi-ui/select'

import InputGroup from '../src'

export const Basic = () => {
  return (
    <>
      <h1>Basic</h1>
      <div className="input-group-basic__wrap">
        <InputGroup>
          <Select
            style={{ width: '36%' }}
            data={[
              { id: 1, title: 'Option 1' },
              { id: 2, title: 'Option 2' },
            ]}
          />
          <Input />
        </InputGroup>
      </div>
    </>
  )
}
