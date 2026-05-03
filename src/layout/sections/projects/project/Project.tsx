import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from "./Project_Styles.ts"
import * as React from "react";

type ProjectPropsType = {
    imageSrc: Array<string>,
    title: string,
    description: string,
    technologies: Array<string>,
    link: Array<string>
}

export const Project:React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.StyledProject>
            <S.Picture loading="lazy" src={props.imageSrc[0]} srcSet={`${props.imageSrc[1]} 2x`} alt={props.title}/>
            <S.InfoBlock>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <S.StackText>
                    <span>Tech stack : </span>
                    <span className="stack">{props.technologies.join(', ')}</span>
                </S.StackText>

                <S.LinksBlock>
                    <S.Link href={`${props.link[0]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"link"} width="20" height="20" aria-hidden={true}/>
                        <span>Live Preview</span>
                    </S.Link>
                    <S.Link href={`${props.link[1]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"hub"} width="20" height="20" aria-hidden={true}/>
                        <span>View Code</span>
                    </S.Link>
                </S.LinksBlock>
            </S.InfoBlock>
        </S.StyledProject>
    );
};

