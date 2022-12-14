import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import * as antd from 'antd'

import { ViewNode } from '@lowcode/concept'

interface Props {
  viewNode: ViewNode
  path: string
  index: number
}

class ViewItemV2 extends Component<Props> {
  componentDidMount(): void {
    const { viewNode, path, index } = this.props
    const dom = findDOMNode(this) as HTMLElement
    if (dom) {
      dom.setAttribute('lowcode-path', path)
      dom.setAttribute('lowcode-index', `${index}`)
      viewNode.setElement(dom)
      viewNode.setRect(dom.getBoundingClientRect())
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { path, viewNode } = this.props
    const dom = findDOMNode(this) as HTMLElement
    if (dom) {
      dom.setAttribute('lowcode-path', path)
      viewNode.setRect(dom.getBoundingClientRect())
    }
  }

  render() {
    const { typename, parentname, children, text, property, slot, isCloseTag } =
      this.props.viewNode
    const { path } = this.props

    const Component = parentname
      ? (antd as any)[parentname][typename]
      : (antd as any)[typename]

    return (
      <Component {...property}>
        {children.length ? (
          children.map((view, index) => (
            <ViewItemV2
              viewNode={view as ViewNode}
              key={(view as ViewNode).id}
              path={`${path}.children[${index}]`}
              index={index}></ViewItemV2>
          ))
        ) : slot ? (
          <div className="emptynode"></div>
        ) : isCloseTag ? null : (
          text
        )}
      </Component>
    )
  }
}

export default ViewItemV2
