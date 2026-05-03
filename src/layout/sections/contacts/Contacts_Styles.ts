import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {font, gap} from "../../../styles/Common.ts";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;

    @media ${theme.media.tablet} {
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
    @media ${theme.media.tablet} {
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
        left: 0;
        right: 0;
        height: 1px;

        background: linear-gradient(
                190deg,
                transparent,
                ${theme.colors.start_gradient},
                ${theme.colors.end_gradient},
                transparent
        );
    }

    @media ${theme.media.tablet} {
        flex-direction: column;
    }
`

const HeaderIconWrapper = styled.div`
    border-radius: 50%;
    padding: 10px;
    border: ${theme.colors.color_icon} 1px solid;
    background: ${theme.colors.bg_icon};
    color: ${theme.colors.color_icon};
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
        ${font({color: theme.colors.text_secondary, Fmax: 14, Fmin: 10})}
    }

    @media ${theme.media.tablet} {
        align-items: center;
        p {
            text-align: center;
        }
    }
`

const GradientText = styled.span`
    ${font({weight: 700, Fmax: 18, Fmin: 10})}
    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    background: ${theme.colors.gradient_primary};
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
    border: ${theme.colors.color_icon} 1px solid;
    background: ${theme.colors.bg_icon};
    color: ${theme.colors.color_icon};
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
        ${font({color: theme.colors.text_secondary, Fmax: 14, Fmin: 10})}
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