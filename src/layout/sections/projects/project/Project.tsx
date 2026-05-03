import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.ts";

type ProjectPropsType = {
    imageSrc: Array<string>,
    title: string,
    description: string,
    technologies: Array<string>,
    link: Array<string>,
    as?: React.ElementType
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject as={props.as}>
            <StyledImage loading="lazy" src={props.imageSrc[0]} srcSet={`${props.imageSrc[1]} 2x`} alt={props.title}/>
            <StyledInfoBlock>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledDescription>{props.description}</StyledDescription>
                <StyledStackText>
                    <span>Tech stack : </span>
                    <span className="stack">{props.technologies.join(', ')}</span>
                </StyledStackText>

                <StyledLinks>
                    <StyledLink href={`${props.link[0]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"link"} width="20" height="20" aria-hidden={true}/>
                        <span>Live Preview</span>
                    </StyledLink>
                    <StyledLink href={`${props.link[1]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"hub"} width="20" height="20" aria-hidden={true}/>
                        <span>View Code</span>
                    </StyledLink>
                </StyledLinks>
            </StyledInfoBlock>
        </StyledProject>
    );
};


const StyledProject = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background: ${theme.colors.bg_section};
    border: ${theme.colors.border_color} 1px solid;
`

const StyledImage = styled.img`
    width: 100%;
    max-height: 260px;
    object-fit: cover;
`

const StyledInfoBlock = styled.div`
    padding: 30px;

    @media ${theme.media.mobile} {
        padding: 15px;
    }
`

const StyledTitle = styled.h4`
    ${font({weight: 600, lineHeight: 1.7, Fmax: 26, Fmin: 18})};
`

const StyledDescription = styled.p`
    ${font({lineHeight: 1.7, Fmax: 18, Fmin: 12, color: theme.colors.text_secondary})}
    margin: 15px 0;
`

const StyledStackText = styled.div`
    ${font({lineHeight: 1.5, weight: 500, Fmax: 16, Fmin: 10})}
    display: inline-block;
    overflow-wrap: anywhere;
    margin-bottom: 20px;

    .stack {
        ${font({weight: 400, color: theme.colors.text_secondary})};
    }
`

const StyledLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${font({weight: 500, lineHeight: 1.5, Fmax: 18, Fmin: 12})};

    @media ${theme.media.mobile} {
        gap: 15px;
        justify-content: center;
    }
`

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration-skip-ink: none;

    :hover {
        transform: scale(1.02);
        background: ${theme.colors.gradient_btn};

        background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: gradientMove 5s linear infinite;
        transition: all 0.2s ease;

        @keyframes gradientMove {
            0% {
                background-position: 0%;
            }
            100% {
                background-position: 200%;
            }
        }
    }

    &:focus {
        outline: none;
        background: linear-gradient(${theme.colors.bg_section}) padding-box, ${theme.colors.gradient_primary} border-box;
        border: 1px solid transparent;
        border-radius: 5px;
    }
`