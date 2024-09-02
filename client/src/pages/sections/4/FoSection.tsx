import React from 'react'
import style from "./FoSection.module.css"
import Title from '../../../components/title/Title'
import ItemContainer from '../../../components/container/ItemContainer'
import Link from './components/Link/Link'

type Props = {}

const FoSection = (props: Props) => {
  return (
    <div className={style.section}>
      <Title title="Contacts" />
      <ItemContainer>
      <div className={style.list_container}>
        <ul className={style.list}>
          {Array.from({length: 4}).map((el, i) => {
            return (
              <Link key={i} url='someurl' title='Github'/>
            )
          })}
        </ul>
      </div>
      </ItemContainer>
    </div>
  )
}

export default FoSection