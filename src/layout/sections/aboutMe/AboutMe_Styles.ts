import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {theme} from "../../../styles/Theme.tsx";

const AboutBlock = styled.div`
    padding-top: 100px;
    z-index: 10;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 30px;
    border: ${theme.colors.border_color} 1px solid;
    background: ${theme.colors.bg_section};
    border-radius: 20px;
    overflow: hidden;
    
    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
    }
`

const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Text = styled.p`
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${font({lineHeight: 1.65, color: theme.colors.text_secondary, Fmax: 18, Fmin: 12})};
    margin-top: 20px;
`

const RightBlock = styled.div`
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr);
    gap: 30px;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
    }

    @media ${theme.media.mobile} {
        justify-items: start;
    }
`

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(12px, 1.5vw, 20px);
`

const IconBox = styled.div`
    min-width: 64px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: ${theme.colors.border_color} 2px solid;
    background: ${theme.colors.bg_icon};

    display: flex;
    align-items: center;
    justify-content: center;
`

const Label = styled.span`
    display: block;
    ${font({weight: 600, Fmax: 18, Fmin: 16})};
    margin-bottom: 10px;
`

const Value = styled.span`
    display: block;
    word-break: break-word;
    ${font({Fmax: 14, Fmin: 10, color: theme.colors.text_secondary})};
`

export const S ={
    AboutBlock,
    GridWrapper,
    LeftBlock,
    Text,
    RightBlock,
    InfoItem,
    IconBox,
    Label,
    Value,
}