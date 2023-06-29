
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-shield-filled')

export const ShieldFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M467.050667 96.469333a83.2 83.2 0 0 1 83.2 0l297.450666 171.733334a83.2 83.2 0 0 1 41.6 72.064v217.088a302.08 302.08 0 0 1-151.04 261.610666l-188.010666 108.565334a83.2 83.2 0 0 1-83.2 0l-188.010667-108.565334A302.08 302.08 0 0 1 128 557.354667V340.266667a83.2 83.2 0 0 1 41.6-72.042667l297.450667-171.733333z m181.781333 342.698667a42.666667 42.666667 0 0 0-60.330667 0L490.666667 537.002667l-55.168-55.168a42.666667 42.666667 0 1 0-60.330667 60.330666l85.333333 85.333334a42.666667 42.666667 0 0 0 60.330667 0l128-128a42.666667 42.666667 0 0 0 0-60.330667z" p-id="7787"></path></svg>
    )
  }
)

if (__DEV__) {
  ShieldFilled.displayName = 'ShieldFilled'
}
  