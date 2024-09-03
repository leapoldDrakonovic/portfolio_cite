import style from "./header.module.css"


const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <ul className={style.navigation_list}>
          <li className={style.navigation_item}>About</li>
          <li className={style.navigation_item}>Contacts</li>
          <li className={style.navigation_item}>Experience</li>
          <li className={style.navigation_item}>Skills</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header