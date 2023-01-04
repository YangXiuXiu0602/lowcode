import React, { useEffect, useState, DragEvent, FC } from 'react'

import { List, Card } from 'antd'
import style from './Material.module.scss'

import { getMaterails } from '@/server/material'
import { ViewNodeType } from '@lowcode/concept'

const { Meta } = Card

interface IMaterialProps {
  resetMenu: () => void
}

const Material: FC<IMaterialProps> = ({ resetMenu }) => {
  const [material, setMaterial] = useState<ViewNodeType[]>([])

  useEffect(() => {
    getMaterails()
      .then((responce) => {
        setMaterial(JSON.parse(responce.data.list))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const onDragStart = (item: ViewNodeType, e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setDragImage(e.target as Element, 0, 0)
    item.property = undefined
    e.dataTransfer.setData('text/json', JSON.stringify(item))
    e.dataTransfer.effectAllowed = 'copyMove'
  }

  return (
    <div className={style.material}>
      <List
        grid={{ column: 3 }}
        dataSource={material}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              draggable={true}
              onDragStart={(event) => onDragStart(item, event)}
              onDragOver={(e) => resetMenu()}>
              <Meta title={item.name} />
            </Card>
            {item.name}
          </List.Item>
        )}
      />
    </div>
  )
}

export default Material
