import styled from "styled-components";
import {font, gap} from "../../../styles/Common.ts";
import {media} from "../../../styles/Theme.tsx";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    gap: 50px;
   
    padding: 20px;

    @media ${media.tablet} {
        grid-template-columns: 1fr;
        justify-items: center;
        margin: 0 auto;
    }
`

const RightBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${gap({Gmin: 20, Gmax: 50})};
`

const LeftBlock = styled.div`
    @media ${media.tablet} {
        max-width: 450px;
        width: 100%;
    }
`

const HeaderBlock = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${gap({Gmin: 20, Gmax: 50})};
    padding-bottom: 10px;

    &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50px;
        right: 50px;
        height: 1px;

        background: linear-gradient(
                190deg,
                transparent,
                ${({theme}) => theme.colors.start_gradient},
                ${({theme}) => theme.colors.end_gradient},
                transparent
        );
    }

    @media ${media.tablet} {
        flex-direction: column;
    }
`

const HeaderIconWrapper = styled.div`
    border-radius: 50%;
    padding: 10px;
    border: ${({theme}) => theme.colors.color_icon} 1px solid;
    background: ${({theme}) => theme.colors.bg_icon};
    color: ${({theme}) => theme.colors.color_icon};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(124, 92, 255, 0.5);

`

const HeaderTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
        ${font({weight: 600, Fmax: 26, Fmin: 20})}
    }

    p {
        color: ${({theme}) => theme.colors.text_secondary};
        ${font({Fmax: 14, Fmin: 10})}
    }

    @media ${media.tablet} {
        align-items: center;
        p {
            text-align: center;
        }
    }
`

const GradientText = styled.span`
    ${font({weight: 700, Fmax: 18, Fmin: 10})}
    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    background: ${({theme}) => theme.colors.gradient_primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
`

const BottomBlock = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${gap({Gmin: 20, Gmax: 40})};
    padding-left: 20px;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
`

const IconBox = styled.div`
    border-radius: 50%;
    padding: 10px;
    border: ${({theme}) => theme.colors.color_icon} 1px solid;
    background: ${({theme}) => theme.colors.bg_icon};
    color: ${({theme}) => theme.colors.color_icon};
    display: flex;
    align-items: center;
    justify-content: center;

`

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h5 {
        ${font({weight: 500, Fmax: 16, Fmin: 14})}
    }

    p {
        color: ${({theme}) => theme.colors.text_secondary};
        ${font({Fmax: 14, Fmin: 10})}
    }
`

export const S = {
    GridWrapper,
    RightBlock,
    LeftBlock,
    HeaderBlock,
    HeaderIconWrapper,
    HeaderTextBlock,
    GradientText,
    BottomBlock,
    Item,
    IconBox,
    TextBlock
}