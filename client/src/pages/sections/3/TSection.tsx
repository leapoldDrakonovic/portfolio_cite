import style from "./TSection.module.css";
import Title from "../../../components/title/Title";
import SkillCard from "./components/SkillCard/SkillCard";

const TSection = () => {
  const baseURL = import.meta.env.VITE_BASE_URL || "";

  return (
    <div className={style.section}>
      <Title title="Key Skills" />
      <div className={style.cards_container}>
        <SkillCard path={`${baseURL}/docker-img.png`} />
        <SkillCard path={`${baseURL}/git-img.png`} />
        <SkillCard path={`${baseURL}/nginx-img.jpg`} />
        <SkillCard path={`${baseURL}/ts-img.png`} />
        <SkillCard path={`${baseURL}/react-img.png`} />
        <SkillCard path={`${baseURL}/nodejs-image.png`} />
      </div>
    </div>
  );
};

export default TSection;
