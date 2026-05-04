import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {media} from "../../../styles/Theme.tsx";

const AboutBlock = styled.div`
    padding-top: 100px;
    z-index: 10;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 20px;
    border: ${({theme}) => theme.colors.border_color} 1px solid;
    background: ${({theme}) => theme.colors.bg_section};
    border-radius: 20px;
    overflow: hidden;
    
    @media ${media.mobile} {
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

    color: ${({ theme }) => theme.colors.text_secondary};
    ${font({lineHeight: 1.5, Fmax: 18, Fmin: 12})};
    margin-top: 20px;
`

const RightBlock = styled.div`
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr);
    gap: 30px;

    @media ${media.tablet} {
        grid-template-columns: 1fr;
    }

    @media ${media.mobile} {
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
    border: ${({theme}) => theme.colors.border_color} 1px solid;
    background: ${({theme}) => theme.colors.bg_icon};

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
    color: ${({ theme }) => theme.colors.text_secondary};
    ${font({Fmax: 14, Fmin: 10})};
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