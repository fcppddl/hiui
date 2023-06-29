
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-freeze-outlined')

export const FreezeOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M832 106.666667a85.333333 85.333333 0 0 1 85.226667 81.066666L917.333333 192v640a85.333333 85.333333 0 0 1-81.066666 85.226667L832 917.333333H192a85.333333 85.333333 0 0 1-85.226667-81.066666L106.666667 832V192a85.333333 85.333333 0 0 1 80.938666-85.226667L192 106.666667h640zM192 618.666667v213.333333h213.333333L192 618.666667z m640-64H554.666667v277.333333h277.333333V554.666667z m-362.666667 0H248.682667L469.333333 775.317333V554.666667z m85.333334-298.666667v213.333333h213.333333L554.666667 256zM192 256v213.333333h213.333333L192 256z m640-64H611.349333L832 412.650667V192zM469.333333 192H248.682667L469.333333 412.650667V192z" p-id="7397"></path></svg>
    )
  }
)

if (__DEV__) {
  FreezeOutlined.displayName = 'FreezeOutlined'
}
  