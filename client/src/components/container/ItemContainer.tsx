import React from 'react'
import style from "./container.module.css"

type Props = {
    children: React.ReactNode
}

const ItemContainer = ({children}: Props) => {
  return (
    <div className={style.item_container}>
        {children}
    </div>
  )
}

export default ItemContainer