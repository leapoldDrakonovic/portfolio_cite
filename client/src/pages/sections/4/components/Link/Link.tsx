import style from "./Link.module.css"


interface ILinkProps {
    title: string,
    url: string
}

const Link = ({title, url}: ILinkProps) => {
  return (
        <a href={url} className={style.link}>
            {title}
        </a>
  )
}

export default Link