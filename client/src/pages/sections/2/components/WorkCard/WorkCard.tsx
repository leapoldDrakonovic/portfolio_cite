import React from 'react'
import style from "./WorkCard.module.css"
import ItemContainer from '../../../../../components/container/ItemContainer'

interface IItemProps {
    text: string
}


interface IWorkCardProps {
    title: string,
    position: string,
    tech: string[]
}

const Item = ({text}: IItemProps) => {
    return (
        <li className={style.tech_item}>
            {text}
        </li>
    )
}

const WorkCard = ({title, position, tech}: IWorkCardProps) => {
  return (
        <ItemContainer>
    <div className={style.work_card}>
            <h4 className={style.job_title}>
                {title}
            </h4>
            <div className={style.job_position}>
                {position}
            </div>
            <div className={style.tech_title}>
                Tech Stack:
            </div>
            <ul className={style.tech_list}>
                {tech?.map((el, i) => {
                    return (
                        <Item key={i} text={el}/>
                    )
                })}
            </ul>

    </div>
        </ItemContainer>
  )
}

export default WorkCard