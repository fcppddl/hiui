
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-expression-outlined')

export const ExpressionOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, ...rest }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role="icon" {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334C323.477333 170.666667 170.666667 323.477333 170.666667 512s152.810667 341.333333 341.333333 341.333333 341.333333-152.810667 341.333333-341.333333S700.522667 170.666667 512 170.666667z m-118.656 410.794666a128.042667 128.042667 0 0 0 237.226667 0.256 42.666667 42.666667 0 1 1 78.976 32.256 213.376 213.376 0 0 1-395.264-0.426666 42.666667 42.666667 0 0 1 79.061333-32.085334zM405.333333 362.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v42.666667a42.666667 42.666667 0 1 1-85.333333 0v-42.666667a42.666667 42.666667 0 0 1 42.666666-42.666666z m213.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666666v42.666667a42.666667 42.666667 0 1 1-85.333333 0v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="39425"></path></svg>
    )
  }
)

if (__DEV__) {
  ExpressionOutlined.displayName = 'ExpressionOutlined'
}
  