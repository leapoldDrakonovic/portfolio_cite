import style from "./TSection.module.css"
import Title from '../../../components/title/Title'
import SkillCard from './components/SkillCard/SkillCard'


const TSection = () => {
  return (
    <div className={style.section}>
        <Title title='Key Skills'/>
        <div className={style.cards_container}>
          <SkillCard path='/docker-img.png' />
          <SkillCard path='/git-img.png' />
          <SkillCard path='/nginx-img.jpg' />
          <SkillCard path='/ts-img.png' />
          <SkillCard path='/react-img.png' />
          <SkillCard path='/nodejs-image.png' />
        </div>
    </div>
  )
}

export default TSection