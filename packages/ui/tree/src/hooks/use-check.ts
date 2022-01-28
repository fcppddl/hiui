import React, { useCallback, useMemo } from 'react'
import { useUncontrolledState } from '@hi-ui/use-uncontrolled-state'
import { FlattedTreeNodeData, TreeNodeEventData, TreeNodeData } from '../types'
import { findNestedChildIds, processCheckedIds } from '../utils'
import { getNodeAncestors, isTreeRoot } from '@hi-ui/tree-utils'

/**
 * 用于 tree 组件复选的 hook
 *
 * @param flattedData
 * @param defaultCheckedIds
 * @param checkedIdsProp
 * @param onCheck
 * @param disabled
 * @returns
 */
export const useCheck = (
  checkedMode: string,
  disabled: boolean,
  flattedData: FlattedTreeNodeData[],
  defaultCheckedIds: React.ReactText[],
  checkedIdsProp?: React.ReactText[],
  onCheck?: (
    checkedIds: React.ReactText[],
    options: {
      checkedNodes: TreeNodeData[]
      semiCheckedIds: React.ReactText[]
      targetNode: TreeNodeEventData
      checked: boolean
    }
  ) => void
) => {
  const [checkedIds, trySetCheckedIds] = useUncontrolledState(
    defaultCheckedIds,
    checkedIdsProp,
    (checkedIds, checkedNode, checked, semiCheckedIds) => {
      const processedIds = processCheckedIds(checkedMode, checkedIds, flattedData)

      const nextCheckedNodes = flattedData
        .filter((item) => processedIds.includes(item.id))
        .map((item) => item.raw)

      onCheck?.(processedIds, {
        checkedNodes: nextCheckedNodes,
        targetNode: checkedNode,
        semiCheckedIds,
        checked,
      })
    }
  )

  const checkedIdsSet = useMemo(() => new Set(checkedIds), [checkedIds])
  const [semiCheckedIds, semiCheckedIdsSet] = useMemo(
    () => getSemiCheckedIdsWithSet(checkedIdsSet, flattedData),
    [checkedIdsSet, flattedData]
  )

  const isCheckedId = (id: React.ReactText) => checkedIdsSet.has(id)
  const isSemiCheckedId = (id: React.ReactText) => semiCheckedIdsSet.has(id)

  const onNodeCheck = useCallback(
    (checkedNode: TreeNodeEventData, checked: boolean) => {
      if (disabled || checkedNode.disabled) return

      const checkedIdsSet = new Set(checkedIds)
      const semiCheckedIdsSet = new Set(semiCheckedIds)

      const checkedNodeId = checkedNode.id
      const ancestors = getNodeAncestors(checkedNode)

      const childrenIds = findNestedChildIds(checkedNode)

      if (checked) {
        // - 对于选中节点自身的处理
        semiCheckedIdsSet.delete(checkedNodeId)
        checkedIdsSet.add(checkedNodeId)

        // - 对于选中节点的后代影响处理
        childrenIds.forEach((child) => {
          // 将未选中标记为选中态
          if (!checkedIdsSet.has(child)) {
            checkedIdsSet.add(child)
          }
          if (semiCheckedIdsSet.has(child)) {
            semiCheckedIdsSet.delete(child)
          }
        })

        // - 对于选中节点的祖先影响处理
        ancestors.forEach(({ id, children }) => {
          // 当该节点的子节点都被全选中时，则该节点为标记为全选，否则为半选
          if (!children?.some((child) => !checkedIdsSet.has(child.id))) {
            semiCheckedIdsSet.delete(id)
            checkedIdsSet.add(id)
          } else {
            semiCheckedIdsSet.add(id)
          }
        })
      } else {
        // - 对于取消选中节点自身的处理
        checkedIdsSet.delete(checkedNodeId)

        // - 对于取消选中节点对祖先的影响处理
        ancestors.forEach(({ id, children }) => {
          if (checkedIdsSet.has(id)) {
            checkedIdsSet.delete(id)
            semiCheckedIdsSet.add(id)
          }

          // 当该节点的子节点都未被选中时，则该节点为标记为未选中
          if (
            !children?.some(
              (child) => checkedIdsSet.has(child.id) || semiCheckedIdsSet.has(child.id)
            )
          ) {
            semiCheckedIdsSet.delete(id)
          }
        })

        // - 对于取消选中节点对后代的影响处理
        childrenIds.forEach((child) => {
          // 将选中标记为未选中态
          if (checkedIdsSet.has(child)) {
            checkedIdsSet.delete(child)
          }
          if (semiCheckedIdsSet.has(child)) {
            semiCheckedIdsSet.delete(child)
          }
        })
      }

      const nextCheckedIds = Array.from(checkedIdsSet)
      const nextSemiCheckedIds = Array.from(semiCheckedIdsSet)

      trySetCheckedIds(nextCheckedIds, checkedNode, checked, nextSemiCheckedIds)
    },
    [disabled, checkedIds, trySetCheckedIds, semiCheckedIds]
  )

  return [onNodeCheck, isCheckedId, isSemiCheckedId] as const
}

/**
 * 在 checkedIdsSet 为数据合法的情况下，查找所有的半选中态的节点 ids
 *
 * @param checkedIdsSet
 * @param flattedData
 * @returns
 */
const getSemiCheckedIdsWithSet = (
  checkedIdsSet: Set<React.ReactText>,
  flattedData: FlattedTreeNodeData[]
) => {
  const semiCheckedNodes = [] as FlattedTreeNodeData[]
  const semiCheckedIdsSet = new Set<React.ReactText>()

  let parent: FlattedTreeNodeData | undefined
  let parentId: React.ReactText | undefined

  flattedData.forEach((node) => {
    parent = node.parent
    // 非顶层节点
    if (!isTreeRoot(parent)) {
      parentId = parent.id
      if (semiCheckedIdsSet.has(parentId)) return

      // 父节点没选中，但是当前节点被选中，则视为半选
      if (!checkedIdsSet.has(parentId) && checkedIdsSet.has(node.id)) {
        semiCheckedIdsSet.add(parentId)
        semiCheckedNodes.push(parent)
      }
    }
  })

  // 自下而上设置半选态
  semiCheckedNodes.forEach((node) => {
    parent = node.parent
    // 非顶层节点
    while (!isTreeRoot(parent)) {
      parentId = parent.id
      // 可能存在兄弟节点，共同祖先需要去重，避免重复计算
      if (semiCheckedIdsSet.has(parentId)) return

      semiCheckedIdsSet.add(parentId)
      parent = parent.parent
    }
  })

  const semiCheckedIds = Array.from(semiCheckedIdsSet)
  return [semiCheckedIds, semiCheckedIdsSet] as const
}
