import React from 'react'
import style from "./WorkCard.module.css"
import ItemContainer from '../../../../../components/container/ItemContainer'

interface IItemProps {
    text: string
}


interface IWorkCardProps {
    
}

const Item = ({text}: IItemProps) => {
    return (
        <li className={style.tech_item}>
            {text}
        </li>
    )
}

const WorkCard = (props: IWorkCardProps) => {
  return (
        <ItemContainer>
    <div className={style.work_card}>
            <h4 className={style.job_title}>
                DLL Dwellers
            </h4>
            <div className={style.job_position}>
                Frontend Developer
            </div>
            <div className={style.tech_title}>
                Tech Stack:
            </div>
            <ul className={style.tech_list}>
                {Array.from({length: 4}).map((el, i) => {
                    return (
                        <Item key={i} text={'123'}/>
                    )
                })}
            </ul>

    </div>
        </ItemContainer>
  )
}

export default WorkCard