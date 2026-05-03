import {font} from "../../../styles/Common.ts";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import abstract from "../../../assets/images/abstract.webp";
import fog from "../../../assets/images/fog3.webp";

const Section = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-areas:
        "title  photo"
        "text   photo"
        "buttons photo";
    column-gap: 75px;
    row-gap: 15px;
    align-items: center;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        grid-template-areas:
            "title"
            "text"
            "photo"
            "buttons";
    }
`

const Title = styled.h2`
    grid-area: title;
    display: flex;
    flex-direction: column;
    ${font({weight: 500, lineHeight: 1.4, Fmax: 58, Fmin: 20})}
`

const GradientText = styled.span`
    ${font({weight: 600, Fmax: 58, Fmin: 24})}

    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    margin-left: -1px;
    background: ${theme.colors.gradient_primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Text = styled.p`
    grid-area: text;
    ${font({Fmax: 20, Fmin: 14, lineHeight: 1.7, color: theme.colors.text_secondary})}
    align-self: start;
    padding-bottom: 20px;
`

const PhotoWrapper = styled.div`
    grid-area: photo;
    align-self: center;
    margin-right: 16px;
    position: relative;

    // &::before {
    //     content: '';
    //     position: absolute;
        //     background: url(${abstract}) no-repeat;
    //     width: 1540px;
    //     height: 1024px;
    //     top: 50%;
    //     right: -50%;
    //     overflow: hidden;
    //     pointer-events: none;
    //
    //     transform: translateY(-45%);
    //     opacity: 0.2;
    // }
    //
    // &::after {
    //     content: '';
    //     position: absolute;
        //     background: url(${fog}) no-repeat;
    //     background-size: cover;
    //     width: 165%;
    //     height: 150%;
    //     top: 48%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     pointer-events: none;
    //     opacity: 0.3;
    // }


    @media ${theme.media.tablet} {
        justify-self: center;
        margin: 0 35px;
    }

    aspect-ratio: 1 / 1;
    border-radius: 50%;
    padding: 3px;
    background: ${theme.colors.gradient_primary};
    z-index: 1;
`

const Glow = styled.div`
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background: ${theme.colors.gradient_primary};
    filter: blur(40px);
    opacity: 0.7;
`;

const Photo = styled.img`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 1;
`

const ButtonsBlock = styled.div`
    grid-area: buttons;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 20px;

    @media ${theme.media.tablet} {
        justify-content: center;
        padding-top: 40px;
    }
`

export const S = {
    Section,
    GridWrapper,
    Title,
    GradientText,
    Text,
    PhotoWrapper,
    Glow,
    Photo,
    ButtonsBlock
}