import style from "./Title.module.css"
import ItemContainer from '../container/ItemContainer'

interface ITitleProps {
    title: string
}

const Title = ({title}: ITitleProps) => {
  return (
    <>
    <ItemContainer>
    <h2 className={style.section_title}>
        {title}
    </h2>
    </ItemContainer>
    </>
  )
}

export default Title