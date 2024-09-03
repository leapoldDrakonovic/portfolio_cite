import React from 'react'
import style from "./Footer.module.css"
import Title from '../title/Title'


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.footer}>
        <Title title='Bye!'/>
    </div>
  )
}

export default Footer