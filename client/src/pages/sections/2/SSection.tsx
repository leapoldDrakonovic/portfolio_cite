
import style from "./SSection.module.css"
import WorkCard from './components/WorkCard/WorkCard'
import Title from '../../../components/title/Title'
import {positions} from "../../../../data/data.js"


const SSection = () => {
  return (
    <div className={style.section}>
        <Title title='Experience'/>
      <div className={style.cards_container}>
        {positions.map((element) => {
          return (
            <WorkCard title={element.title} position={element.position} tech={element.tech} key={element.title}/>
          )
        })}
      </div>
    </div>
  )
}

export default SSection