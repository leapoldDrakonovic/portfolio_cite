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
          <Link url='https://github.com/leapoldDrakonovic' title='Github'/>
          <Link url='https://www.linkedin.com/in/egor-lapshin/' title='Linkedin'/>
          <Link url='https://t.me/fisshbait' title='Telegram'/>
          <Link url='mailto:lapshinegor7@gmail.com' title='lapshinegor7@gmail.com'/>
        </ul>
      </div>
      </ItemContainer>
    </div>
  )
}

export default FoSection