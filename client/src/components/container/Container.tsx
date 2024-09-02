import React from 'react'
import style from "./container.module.css"

interface IContainerProps {
  children: React.ReactNode
}


const Container = ({children}: IContainerProps) => {
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}

export default Container