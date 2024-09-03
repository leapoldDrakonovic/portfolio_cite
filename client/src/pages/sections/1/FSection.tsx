import style from "./FSection.module.css"
import ItemContainer from '../../../components/container/ItemContainer'



const FSection = () => {
  return (
    <>
    <ItemContainer>
          <div className={style.first_section}>
            <div className={style.first_section_container}>
              <div className={style.content_container}>
                <div className={style.title}>Frontend Developer</div>
                <div className={style.description}>
                  Hey! My name is Egor
                </div>

                <div className={style.description}>
                  I easily integrate into teams and workflows, quickly grasping
                  the essence of tasks and taking an initiative approach to
                  work. I love learning new things quickly, so I'm always open
                  to acquiring new skills and technologies. My diligent work
                  ethic enables me to efficiently achieve goals and deliver
                  results. 
                  <br/>
                  <br/>
                  <br/>
                  Citizen: Russian Federation 
                  <br />
                  Current Location: Serbia
                  (Temporary Residence)
                </div>
              </div>
              <div className={style.img_container}>
                <img className={style.img} src="/portrait.png" alt="" />
              </div>
            </div>
          </div>
        </ItemContainer>
    </>
  )
}

export default FSection