import React from "react";
import style from "./SkillCard.module.css";
import ItemContainer from "../../../../../components/container/ItemContainer";

interface ISkillCardProps {
  path?: string;
}

const SkillCard = ({ path }: ISkillCardProps) => {
  return (
    <ItemContainer>
      <div className={style.skill_card}>
        <img className={style.img} src={path} alt="" />
      </div>
    </ItemContainer>
  );
};

export default SkillCard;
