import sprite from '../../assets/images/sprite.svg';
import * as React from "react";

type IconPropsType = {
    width?: string,
    height?: string,
    iconId?: string,

}

export const Icon:React.FC<IconPropsType> = ({width, height, iconId}: IconPropsType) => {
    return (
        <svg width={width || "30"} height={height || "30"}>
            <use href={`${sprite}#${iconId}`}/>
        </svg>
    );
};

