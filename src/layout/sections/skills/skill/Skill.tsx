import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from "./Skill_Styles.ts";

type SkillPropsType = {
    skillName: string;
    iconId: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <Icon iconId={props.iconId} width={"clamp(30px, 4vw, 60px)"} height={"clamp(30px, 4vw, 60px)"}/>
            <S.Title>{props.skillName}</S.Title>
        </S.StyledSkill>
    );
};