
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-shopping-cart-filled')

export const ShoppingCartFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M127.146667 106.666667a128 128 0 0 1 124.650666 98.922666l1.088 5.12 11.882667 62.4a126.933333 126.933333 0 0 1 57.685333-16.96l6.357334-0.149333h476.032c78.805333 0 138.496 70.4 126.506666 147.562667l-0.810666 4.629333-45.184 213.333333a127.658667 127.658667 0 0 1-33.92 65.024 106.666667 106.666667 0 1 1-117.205334 43.328l3.264-4.544h-341.333333a106.666667 106.666667 0 1 1-113.962667-38.784 127.637333 127.637333 0 0 1-32.533333-58.773333l-1.365333-6.250667-45.162667-213.333333-1.002667-5.802667-0.704-5.76-32.362666-169.941333a42.666667 42.666667 0 0 0-38.528-34.56L127.146667 192H91.093333a42.666667 42.666667 0 0 1-3.2-85.226667L91.093333 106.666667h36.053334z m183.68 661.333333a21.333333 21.333333 0 1 0 0 42.666667 21.333333 21.333333 0 0 0 0-42.666667z m512 0a21.333333 21.333333 0 1 0 0 42.666667 21.333333 21.333333 0 0 0 0-42.666667z" p-id="7652"></path></svg>
    )
  }
)

if (__DEV__) {
  ShoppingCartFilled.displayName = 'ShoppingCartFilled'
}
  