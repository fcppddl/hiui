import React from 'react'
import Tooltip from '../src'
import Button from '@hi-ui/button'

/**
 * @title 不同方位
 */
export const Placement = () => {
  return (
    <>
      <h1>Placement</h1>
      <div className="popper-placement__wrap">
        <table className="placement-table" cellSpacing="5">
          <tbody>
            <tr>
              <td></td>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="top-start"
                >
                  <Button>top-start</Button>
                </Tooltip>
              </td>
              <td>
                <Tooltip title="我是内容我是内容我是内容我是内容" trigger="hover" placement="top">
                  <Button>top</Button>
                </Tooltip>
              </td>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="top-end"
                >
                  <Button>top-end</Button>
                </Tooltip>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="bottom"
                >
                  <Button>left-start</Button>
                </Tooltip>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="right-start"
                >
                  <Button>right-start</Button>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="bottom"
                >
                  <Button>left</Button>
                </Tooltip>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Tooltip title="我是内容我是内容我是内容我是内容" trigger="hover" placement="right">
                  <Button>right</Button>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="bottom"
                >
                  <Button>left-end</Button>
                </Tooltip>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="right-end"
                >
                  <Button>right-end</Button>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="bottom-start"
                >
                  <Button>bottom-start</Button>
                </Tooltip>
              </td>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="bottom"
                >
                  <Button>bottom</Button>
                </Tooltip>
              </td>
              <td>
                <Tooltip
                  title="我是内容我是内容我是内容我是内容"
                  trigger="hover"
                  placement="bottom-end"
                >
                  <Button>bottom-end</Button>
                </Tooltip>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
