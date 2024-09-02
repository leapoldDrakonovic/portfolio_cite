import React from 'react'
import ItemContainer from '../../../components/container/ItemContainer'
import style from "./SSection.module.css"
import WorkCard from './components/WorkCard/WorkCard'
import Title from '../../../components/title/Title'

type Props = {}

const SSection = (props: Props) => {
  return (
    <div className={style.section}>
        <Title title='Experience'/>
      <div className={style.cards_container}>
        <WorkCard/>
        <WorkCard/>
      </div>
    </div>
  )
}

export default SSection