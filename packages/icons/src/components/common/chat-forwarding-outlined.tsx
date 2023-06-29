
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-chat-forwarding-outlined')

export const ChatForwardingOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M583.893333 106.666667C779.861333 106.666667 938.666667 265.493333 938.666667 461.44c0 195.904-158.826667 354.730667-354.773334 354.730667h-101.973333l-49.344 49.344c-57.386667 57.386667-155.477333 16.746667-155.477333-64.405334v-24.533333C163.242667 717.610667 85.333333 598.677333 85.333333 461.44 85.333333 265.493333 244.16 106.666667 440.106667 106.666667h143.786666z m0 85.333333h-143.786666C291.264 192 170.666667 312.618667 170.666667 461.44c0 104.064 59.008 194.474667 145.706666 239.381333l46.058667 23.893334v76.394666c0 1.472 0.213333 2.24 0.298667 2.496 0.085333 0.298667 0.213333 0.512 0.341333 0.725334a6.741333 6.741333 0 0 0 2.901333 2.090666 6.784 6.784 0 0 0 3.541334 0.576 2.517333 2.517333 0 0 0 0.768-0.256 8.256 8.256 0 0 0 1.962666-1.557333l74.346667-74.346667h137.322667C732.714667 730.837333 853.333333 610.218667 853.333333 461.44S732.714667 192 583.893333 192z m30.485334 148.714667l96.298666 100.693333a42.666667 42.666667 0 0 1 0 58.986667l-96.298666 100.693333a42.666667 42.666667 0 1 1-61.653334-58.986667L581.461333 512H384a42.666667 42.666667 0 1 1 0-85.333333h194.496l-25.792-26.965334a42.666667 42.666667 0 1 1 61.653333-58.986666z" p-id="7262"></path></svg>
    )
  }
)

if (__DEV__) {
  ChatForwardingOutlined.displayName = 'ChatForwardingOutlined'
}
  